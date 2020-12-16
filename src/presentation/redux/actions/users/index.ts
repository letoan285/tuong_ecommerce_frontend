import { IAction } from '../../../../shared/interface/common';

export interface IUserLogin {
    email: string;
    password: string;
    remember?: boolean;
}

export enum UserActionTypes {
    LOGIN = '[Users] LOGIN',
    LOGIN_SUCCESS = '[Users] LOGIN_SUCCESS',
    LOGIN_FAIL = '[Users] LOGIN_FAIL',
}

export const login = (payload: IUserLogin): IAction<any> => {
    return {
        type: UserActionTypes.LOGIN,
        payload
    }
}

export const loginSuccess = (payload: any): IAction<any> => {
    return {
        type: UserActionTypes.LOGIN_SUCCESS,
        payload
    }
}

export const loginFail = (payload: any): IAction<any> => {
    return {
        type: UserActionTypes.LOGIN_FAIL,
        payload
    }
}