import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { TokenType } from '../../constants';
import StorageGateway from '../storage';
import Type from './type';
import { IResource } from '../../../shared/interface/common/resource';
import ResponseModel from '../../../models/response';
import CustomerRepository from '../../repository/customer';
import { getBaseConfig } from '../../../config';

class ApiGateway {
  _configTimeout = 30000;

  _instanceAxios!: AxiosInstance;

  _endpoint: string;

  _accessToken: string;

  _adminUsername: string;

  _adminPassword: string;

  _googleApiKey: string;

  _resource?: IResource;

  _userRepository: CustomerRepository;

  static createAPIConnection(settings: any) {

    return new ApiGateway(settings);
  }

  constructor(settings: any) {
    const {
      endpoint,
      accessToken,
      headers,
      adminUsername,
      adminPassword,
      googleApiKey,
    } = settings;

    this._endpoint = endpoint;
    this._adminUsername = adminUsername;
    this._adminPassword = adminPassword;
    this._accessToken = accessToken;
    this._googleApiKey = googleApiKey;
    this._userRepository = new CustomerRepository();
    this._createInstance(headers);
  }

  getEndpoint = (resourceType: string) => {
    return this._endpoint;
  };

  doGetRequest = (resource: IResource): Promise<ResponseModel<any>> => {
    this._interceptRequest(resource);
    this._resource = resource;
    const { Path } = resource;
    const endpoint = this.getEndpoint(resource.Type);

    const url = `${endpoint}${Path}`;

    return this._instanceAxios
      .get(url)
      .then(this._handleSuccess)
      .catch(this._handleError);
  };

  doPostRequest = (
    resource: IResource,
    body?: any
  ): Promise<ResponseModel<any>> => {
    this._interceptRequest(resource);
    this._resource = resource;
    const { Path } = resource;
    if (resource.Type == 'user_login') {
      const headers = 'defaultHeaders';
      this._createInstance(headers);
    }
    const endpoint = this.getEndpoint(resource.Type);
    const url = `${endpoint}${Path}`;
    return this._instanceAxios
      .post(url, body)
      .then(this._handleSuccess)
      .catch(this._handleError);
  };

  doPutRequest = (
    resource: IResource,
    body?: any
  ): Promise<ResponseModel<any>> => {
    this._interceptRequest(resource);
    this._resource = resource;
    const { Path } = resource;
    const endpoint = this.getEndpoint(resource.Type);
    const url = `${endpoint}${Path}`;
    return this._instanceAxios
      .put(url, body)
      .then(this._handleSuccess)
      .catch(this._handleError);
  };

  doDeleteRequest = (resource: IResource): Promise<ResponseModel<any>> => {
    this._interceptRequest(resource);
    this._resource = resource;
    const { Path } = resource;
    const endpoint = this.getEndpoint(resource.Type);
    const url = `${endpoint}${Path}`;
    return this._instanceAxios
      .delete(url)
      .then(this._handleSuccess)
      .catch(this._handleError);
  };

  _createInstance = (headers: any) => {
    const config: AxiosRequestConfig = {
      baseURL: this._endpoint,
      timeout: this._configTimeout,
      headers: headers || {
        'Content-Type': 'application/json',
      },
    };
    this._instanceAxios = axios.create(config);
    this._interceptResponse();
  };

  _interceptRequest = (resource: IResource) => {
    const resourceType = resource.Type;

    if (resourceType !== Type.Public) {
      this._instanceAxios.interceptors.request.use(
        async (config) => {
          if (resourceType === Type.GoogleMaps) {
            config.url = `${config.url}&key=${this._googleApiKey}`;
          } else if (resourceType === Type.Customer) {
            let authHeader;
            authHeader = `Bearer ${this._accessToken}`;
            config.headers.Authorization = authHeader;
          } else if (resourceType === Type.Admin) {
            const token: any = await this._getTokenFromType(resourceType);
            config.headers.Authorization = token.data;
          } else {
            let authHeader;
            const token: any = await this._getTokenFromType(resourceType);
            if (token) {
              authHeader = token.data;

              if (resourceType === Type.Customer) {
                authHeader = `Bearer ${this._accessToken}`;
              }
            }
            if (authHeader) {
              // config.headers.client_session = authHeader;
              config.headers['Client-Session'] = authHeader;
            } else {
              // Add default token of axios for unit test
              config.headers.Authorization =
                axios.defaults.headers.Authorization;
            }
          }
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
    }
  };

  _getTokenFromType = (type: string) => {
    switch (type) {
      case Type.Customer:
        return this._getCustomerToken();
      case Type.Admin:
        return this._getAdminToken();
    }
  };

  _getCustomerToken = () => {
    return StorageGateway.doGetString(TokenType.Customer);
  };

  _getAdminToken = () => {
    return StorageGateway.doGetString(TokenType.Admin);
    // return this._accessToken;
  };

  /**
   * If token is expired, reauthorize and try to call API again
   * */
  _interceptResponse = () => {
    this._instanceAxios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          const { status } = error.response;
          const { config } = error;
          if (status === 401) {
            // TODO: retry reauthorize
            if (this._resource) {
              if (this._resource.Type === Type.Public) {
                return this._userRepository
                  .loginUser(this._adminUsername, this._adminPassword)
                  .then((adminResp: any) => {
                    const adminToken = adminResp.data;
                    if (adminToken) {
                      this._accessToken = adminToken;
                      error.config.headers.Authorization = `Bearer ${adminToken}`;
                      const appConfigs = getBaseConfig();
                      if (appConfigs) {
                        appConfigs.accessToken = adminToken;
                      }
                      return this._instanceAxios.request(config);
                    }
                    return adminResp;
                  });
              }
            }
          }
        }
        return Promise.reject(error);
      }
    );
  };

  _handleSuccess = (
    response: AxiosResponse
  ): ResponseModel<any> | Promise<ResponseModel<any>> => {
    const { status } = response;
    if (status >= 200 && status < 300) {
      return ResponseModel.createSuccess(response.data);
    }
    return Promise.reject(ResponseModel.createError(status, response.data));
  };

  _handleError = (error: any) => {
    let status = 0;
    let message = '';
    let params;
    if (error.response) {
      // server was received message, but response smt
      status = error.response.status;
      message = error.response.data.message;
      params = error.response.data.parameters;

      if (status >= 200 && status < 300) {
        return this._handleSuccess(error.response);
      }

      const rawDataText = error.response.data;
      if (rawDataText && typeof rawDataText === 'string') {
        try {
          const errorObj = JSON.parse(rawDataText);
          if (errorObj) {
            message = errorObj.MESSAGE;
          }
        } catch (err) {
          message = err.toString();
        }
      }
    } else {
      // smt went wrong
      status = 500;
      message = error.message;
    }
    return Promise.reject(ResponseModel.createError(status, message, params));
  };
}

export default ApiGateway;
