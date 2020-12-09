import ResponseModel from '../../../models/response';
import StorageModel from '../../../models/storageModel';

class StorageGateway {

    doGet = (key: string): Promise<ResponseModel<any>> => {
        try {
            return new Promise(((resolve, reject) => {
                resolve(ResponseModel.createSuccess('result'));
            }));

        } catch (error) {
            console.log('error', error);
            return new Promise(((resolve, reject) => {
                reject(ResponseModel.createError(400, error.toString()));
            }));
        }
    };

    doGetString = (key: string): Promise<ResponseModel<any>> => {
        try {
            return new Promise(((resolve, reject) => {
                const token = localStorage.getItem(key);
                console.log('doGetString', token);
                
                resolve(ResponseModel.createSuccess(token));
            }));

        } catch (error) {
            console.log('error', error);
            return new Promise(((resolve, reject) => {
                reject(ResponseModel.createError(400, error.toString()));
            }));
        }
    };

    doGetJson = (key: string): Promise<ResponseModel<StorageModel<any>>> => {
        try {
            return new Promise(((resolve, reject) => {
                resolve(ResponseModel.createSuccess('result'));
            }));

        } catch (error) {
            console.log('error', error);
            return new Promise(((resolve, reject) => {
                reject(ResponseModel.createError(400, error.toString()));
            }));
        }
    };

    doUpdate = (key: string, value: string): Promise<ResponseModel<any>> => {
        try {
            return new Promise(((resolve, reject) => {
                localStorage.setItem(key, value);
                resolve(ResponseModel.createSuccess('result'));
            }));
        } catch (error) {
            console.log('error =>', error);
            return new Promise(((resolve, reject) => {
                reject(ResponseModel.createError(400, error.toString()));
            }));
        }
    };

    doUpdateJson = (key: string, value: any): Promise<ResponseModel<any>> => {
        try {
            return new Promise(((resolve, reject) => {
                const storargeModel = new StorageModel(value);
                resolve(ResponseModel.createSuccess(storargeModel));
            }));
        } catch (error) {
            console.log('error =>', error);
            return new Promise(((resolve, reject) => {
                reject(ResponseModel.createError(400, error.toString()));
            }));
        }
    };

    doDelete(key: string): Promise<ResponseModel<any>> {
        try {
            return new Promise(((resolve, reject) => {
                resolve(ResponseModel.createSuccess('result'));
            }));
        } catch (error) {
            console.log('error =>', error);
            return new Promise(((resolve, reject) => {
                reject(ResponseModel.createError(400, error.toString()));
            }));
        }
    }

    doClean(): Promise<ResponseModel<any>> {
        try {
            return new Promise(((resolve, reject) => {
                localStorage.clear();
                resolve(ResponseModel.createSuccess('Clear all Token'));
            }));
        } catch (error) {
            return new Promise(((resolve, reject) => {
                reject(ResponseModel.createError(400, error.toString()));
            }));
        }
    }
}

export default new StorageGateway();
