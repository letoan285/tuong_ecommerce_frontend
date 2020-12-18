import { ofType } from "redux-observable";
import { UserActionTypes,registerSuccess,registerFail } from '../../actions/users';
import { exhaustMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import UserUseCase from '../../../../domain/usecases/users'


export const userRegisterEpic = (action$: any, state$: any) => action$.pipe(
    ofType(UserActionTypes.REGISTER),
    exhaustMap((action: any) => {
        return new Observable((obs) => {
            const { name, email, password } = action.payload;
            
            const usercase  = new UserUseCase.UserRegisterUseCase(name, email, password);
            usercase.execute().then((response) => {

                if(response){
                    obs.next(registerSuccess(response));
                    obs.complete();
                } else {
                    obs.next(registerFail('Register Failed !'));
                    obs.complete();
                }
            })


        });
    })
);
