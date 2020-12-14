import { IAction } from '../../../../shared/interface/common';

export enum CartActionTypes {
    ADD_TO_CART = '[Cart] ADD_TO_CART',
    GET_CARTS = '[Cart] GET_CARTS',
    REMOVE_CART_ITEM = '[Cart] REMOVE_CART_ITEM'
}

export const addToCart = (payload: any): IAction<any> => {
    return {
        type: CartActionTypes.ADD_TO_CART,
        payload
    }
}

export const getCarts = (): IAction<any> => {
    return {
        type: CartActionTypes.GET_CARTS,
    }
}

export const removeCartitem = (payload: any): IAction<any> => {
    return {
        type: CartActionTypes.REMOVE_CART_ITEM,
        payload
    }
}