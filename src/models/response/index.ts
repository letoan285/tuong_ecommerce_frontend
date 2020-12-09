export default class ResponseModel<T> {
    private _code: number;
    private _isError: boolean;
    private _message?: string;
    private _data?: T;

    constructor(code = 0, isError = false, message?: string, data?: T){
        this._code = code;
        this._isError = isError;
        this._message = message;
        this._data = data;
    }

    static createSuccess(data: any): ResponseModel<any>{
        const response = new ResponseModel();
        response._data = data;
        response._isError = false;
        return response;
    }

    static createError(code: number, message: string, params?: any) {
        const response = new ResponseModel();
        response._code = code;
        response._isError = true;
        response._message = message;
        return response;
    }

    get code(): number {
        return this._code;
    }
    set code(value: number){
        this._code = value;
    }
    get isError(): boolean {
        return this._isError;
    }
    set isError(value: boolean){
        this._isError = value;
    }
    get message(): string|undefined {
        return this._message;
    }
    set message(value: string|undefined){
        this._message = value;
    }
    get data(): T|undefined{
        return this._data
    }
    set data(value: T|undefined){
        this._data = value;
    }
} 