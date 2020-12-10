import { IAction } from '../../../../shared/interface/common';

export enum ProductActionTypes {
    GET_PRODUCTS = '[Products] GET_PRODUCTS',
    GET_PRODUCTS_SUCCESS = '[Products] GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_FAIL = '[Products] GET_PRODUCTS_FAIL',
    GET_PRODUCT = '[Products] GET_PRODUCT',
    GET_PRODUCT_SUCCESS = '[Products] GET_PRODUCT_SUCCESS',
    GET_PRODUCT_FAIL = '[Products] GET_PRODUCT_FAIL'
}

export const getProducts = (): IAction<any> => {
    return {
        type: ProductActionTypes.GET_PRODUCTS
    }
}

export const getProductsSuccess = (payload: any): IAction<any> => {
    return {
        type: ProductActionTypes.GET_PRODUCTS_SUCCESS,
        payload
    }
} 
export const getProductsFail = (error: string): IAction<string> => {
    return {
        type: error
    }
}

export const getProduct = (payload: string): IAction<any> => {
    return {
        type: ProductActionTypes.GET_PRODUCT,
        payload
    }
}

export const getProductSuccess = (payload: any): IAction<any> => {
    return {
        type: ProductActionTypes.GET_PRODUCT_SUCCESS,
        payload
    }
} 
export const getProductFail = (error: string): IAction<string> => {
    return {
        type: error
    }
} 