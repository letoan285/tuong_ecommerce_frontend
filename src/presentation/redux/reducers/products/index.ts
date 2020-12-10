import { ProductActionTypes } from '../../actions/products';
const initialState: any = {
    sucess: false,
    data: undefined,
    message: '',
    loading: false,
    loaded: false
}
export const productsReducer = (state = initialState, action: any) => {

    switch(action.type){
        case ProductActionTypes.GET_PRODUCTS_SUCCESS: {

            return {
                ...state,
                data: action.payload
            }
        }
        case ProductActionTypes.GET_PRODUCTS_FAIL: {
            return {
                ...state,
               message: action.payload
            }
        }
        case ProductActionTypes.GET_PRODUCT_SUCCESS : {
            return {
                ...state,
                data: {
                    ...state.data,
                    product: action.payload
                },
                success: true
            }
        }

        case ProductActionTypes.GET_PRODUCT_FAIL : {
            return {
                ...state,
                message: action.payload,
                success: false
            }
        }
        default: {
            return state;
        }
    }
}
