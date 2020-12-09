export interface IRemoteConfig {
    endpoint: string;
    domain: string;
    accessToken: string;
    adminUser: string;
    adminPassword: string;
    [key: string]: any;
}
export interface IActionParams {

}
export interface IAction<T> {
    type: string;
    payload?: T;
    error?: boolean;
    params?: any;
    [key: string]: any;
}
export interface IState<T> {
    isFeching: boolean;
    status: string;
    data?: T;
    params?: any;
    errorMessage: string;
    actionType: string;
    success: boolean;
    canLoadMore?: boolean;
}