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
                let productInCart = carts.filter((item: any) => item.id == product.id);
   
                if(!productInCart.length){
                    carts.push(product);
                } else {
        
                    carts.map((item: any, idx: number) => {
                        if(item.id == product.id){
                            item.quantity +=1;
                        }
                    })
                }
            } else {
                carts.push(product);
            }
            localStorage.setItem('carts', JSON.stringify(carts));
            return {
                ...state,
                data: carts
            }
        }
        case CartActionTypes.GET_CARTS: {
            let carts: any = localStorage.getItem('carts');
            if(!carts){
                carts = [];
            } else {
                carts = JSON.parse(carts); 
            }
            return {
                ...state,
                data: {
                    carts: carts
                }
            }
        }
        case CartActionTypes.REMOVE_CART_ITEM: {
            let cartStorage: any = localStorage.getItem('carts');
            let carts = JSON.parse(cartStorage);
            carts = carts.filter((item: any) => {
                return item.id != action.payload.id;
            })
            // debugger

            localStorage.setItem('carts', JSON.stringify(carts));

            return {
                ...state,
                data: {
                    carts: carts
                }
            }
        }
        
        default: {
            return state;
        }
    }
}
