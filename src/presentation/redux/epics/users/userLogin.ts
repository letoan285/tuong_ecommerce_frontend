import { ofType } from "redux-observable";
import { UserActionTypes,loginSuccess,loginFail } from '../../actions/users';
import { exhaustMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Axios from "axios";
// import ProductUseCase from '../../../../domain/usecases/products';
import {UserLoginUseCase} from '../../../../domain/usecases/users'


export const userLoginEpic = (action$: any, state$: any) => action$.pipe(
    ofType(UserActionTypes.LOGIN),
    exhaustMap((action: any) => {
        return new Observable((obs) => {
            const { email, password } = action.payload;
            
            const usercase  = new UserLoginUseCase(email, password);
            Axios.get('http://localhost:8000/api/products').then((response: any) => {
                const products = response.data.data;
                if(response){
                    obs.next(loginSuccess(products));
                    obs.complete();
                } else {
                    obs.next(loginFail('Login Failed !'));
                    obs.complete();
                }
            
            });

        });
    })
);
