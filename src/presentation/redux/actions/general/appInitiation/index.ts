import { IAction } from '../../../../../shared/interface/common';

export const INIT_APP = 'INIT_APP';
export const INIT_APP_SUCCESS = 'REQUEST_APP_CONFIGURATIONS_SUCCESS';
export const INIT_APP_FAILED = 'REQUEST_APP_CONFIGURATIONS_FAILED';


export const initApplication = (): IAction<any> => ({
    type: INIT_APP
});

export const initApplicationSuccess = (payload?: any): IAction<any> => ({
    type: INIT_APP_SUCCESS,
    payload
});

export const initApplicationFailed = (error: any): IAction<any> => ({
    type: INIT_APP_FAILED,
    error
});
