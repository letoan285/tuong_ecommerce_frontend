import { IAction } from '../../../../shared/interface/common';

export interface IUserLogin {
    email: string;
    password: string;
    remember?: boolean;
}

export interface IUserRegister {
    email: string;
    password: string;
    name?: string;
}

export enum UserActionTypes {
    LOGIN =             '[Users] LOGIN',
    LOGIN_SUCCESS =     '[Users] LOGIN_SUCCESS',
    LOGIN_FAIL =        '[Users] LOGIN_FAIL',
    REGISTER =          '[Users] REGISTER',
    REGISTER_SUCCESS =  '[Users] REGISTER_SUCCESS',
    REGISTER_FAIL =     '[Users] REGISTER_FAIL',
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

// Register
export const register = (payload: IUserRegister): IAction<any> => {
    return {
        type: UserActionTypes.REGISTER,
        payload
    }
}

export const registerSuccess = (payload: any): IAction<any> => {
    return {
        type: UserActionTypes.REGISTER_SUCCESS,
        payload
    }
}

export const registerFail = (payload: any): IAction<any> => {
    return {
        type: UserActionTypes.REGISTER_FAIL,
        payload
    }
}