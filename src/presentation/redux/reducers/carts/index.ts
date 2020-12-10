import { CartActionTypes } from '../../actions/carts';
const initialState: any = {
    sucess: false,
    data: undefined,
    message: '',
    loading: false,
    loaded: false
}
export const cartsReducer = (state = initialState, action: any) => {

    switch(action.type){
        case CartActionTypes.ADD_TO_CART: {
            let carts = [];
            const product = action.payload;

            let cartInlocal: any = localStorage.getItem('carts');
            if(cartInlocal){
                carts = JSON.parse(cartInlocal);
                carts.push(product);
            } else {
                carts.push(product);
            }
            localStorage.setItem('carts', JSON.stringify(carts));
            return {
                ...state,
                data: action.payload
            }
        }
        
        default: {
            return state;
        }
    }
}
