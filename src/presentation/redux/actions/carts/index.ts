import { IAction } from '../../../../shared/interface/common';

export enum CartActionTypes {
    ADD_TO_CART = '[Cart] ADD_TO_CART'
}

export const addToCart = (payload: any): IAction<any> => {
    return {
        type: CartActionTypes.ADD_TO_CART,
        payload
    }
}