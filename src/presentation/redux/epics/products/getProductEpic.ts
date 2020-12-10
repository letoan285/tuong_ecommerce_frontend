import { ofType } from "redux-observable";
import { ProductActionTypes, getProductSuccess, getProductFail } from '../../actions/products';
import { exhaustMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Axios from "axios";
// import ProductUseCase from '../../../../domain/usecases/products';
class GetProductsUseCase {
    execute = () => {
        return Promise.resolve('success');
    }
}

export const productEpic = (action$: any, state$: any) => action$.pipe(
    ofType(ProductActionTypes.GET_PRODUCT),
    exhaustMap(action => {
       
        return new Observable((obs) => {
            const useCase = new GetProductsUseCase();
            Axios.get(`http://localhost:8000/api/products/${1}`).then((response: any) => {
                const product = response;
                debugger
                if(response){
                    obs.next(getProductSuccess(response));
                    obs.complete();
                } else {
                    obs.next(getProductFail('Something Wrong !'));
                    obs.complete();
                }
            
            });

        });
    })
);
