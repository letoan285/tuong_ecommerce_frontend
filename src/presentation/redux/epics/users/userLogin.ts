import { ofType } from "redux-observable";
import { UserActionTypes,loginSuccess,loginFail } from '../../actions/users';
import { exhaustMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Axios from "axios";
// import ProductUseCase from '../../../../domain/usecases/products';
import UserUseCase from '../../../../domain/usecases/users'


export const userLoginEpic = (action$: any, state$: any) => action$.pipe(
    ofType(UserActionTypes.LOGIN),
    exhaustMap((action: any) => {
        return new Observable((obs) => {
            const { email, password } = action.payload;
            
            const usercase  = new UserUseCase.UserLoginUseCase(email, password);
            usercase.execute().then((response) => {
                if(response){
                    obs.next(loginSuccess(response));
                    obs.complete();
                } else {
                    obs.next(loginFail('Login Failed !'));
                    obs.complete();
                }
            })


        });
    })
);
