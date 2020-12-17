import { ExpressResource } from '../../../gateway/api/resource';
import ResponseModel from '../../../../models/response';
import {getConfig} from '../../../setting';
import ApiGateway from '../../../gateway/api';
// import { IProduct } from 'src/shared/interfaces/product';



const Login = (email: string, password: string): Promise<any> => {
    // const setting = getConfig();
    // debugger
    const apiGateway = ApiGateway.createAPIConnection(getConfig());
    const userResource = ExpressResource.User.Login();
    return apiGateway.doPostRequest(userResource, {email, password})
      .then((response: ResponseModel<string>) => {
        const { data } = response;
        debugger
        return data;
      });
  };
  
export default {
    Login
}