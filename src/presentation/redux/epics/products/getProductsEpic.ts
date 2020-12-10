import { ofType } from "redux-observable";
import { ProductActionTypes, getProductsSuccess, getProductsFail } from '../../actions/products';
import { exhaustMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Axios from "axios";
// import ProductUseCase from '../../../../domain/usecases/products';


export const productsEpic = (action$: any, state$: any) => action$.pipe(
    ofType(ProductActionTypes.GET_PRODUCTS),
    exhaustMap(action => {
       
        return new Observable((obs) => {
            Axios.get('http://localhost:8000/api/products').then((response: any) => {
                const products = response.data.data;
                if(response){
                    obs.next(getProductsSuccess(products));
                    obs.complete();
                } else {
                    obs.next(getProductsFail('Something Wrong !'));
                    obs.complete();
                }
            
            });

        });
    })
);
