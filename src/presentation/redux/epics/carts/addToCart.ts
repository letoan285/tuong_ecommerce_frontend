import { ofType } from "redux-observable";
import { CartActionTypes, addToCart } from '../../actions/carts';
import { exhaustMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Axios from "axios";


// export const addToCartEpic = (action$: any, state$: any) => action$.pipe(
//     ofType(CartActionTypes.ADD_TO_CART),
//     exhaustMap((action: any) => {
//         return new Observable((obs) => {
//             let cart = localStorage.getItem('carts') || "[]";
       
//             const carts = JSON.parse(cart);
//             carts.push(action.payload);
//             localStorage.setItem('carts', JSON.stringify(carts));
//             obs.next(addToCart(action.payload));
//             obs.complete();

//         });
//     })
// );
