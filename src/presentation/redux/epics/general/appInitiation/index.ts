import { ofType } from 'redux-observable';
import { Observable } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import { INIT_APP, initApplicationFailed, initApplicationSuccess } from '../../../actions/general/appInitiation';
import InitAppUseCase from '../../../../../domain/usecases/general/appInitation';
// import ProductRepository from '../../../../../data/repository/product'

export const initAppEpic = (action$: any, state$: any) =>
    action$.pipe(
        ofType(INIT_APP),
        exhaustMap(action => {
            return new Observable(obs => {
                obs.next(initApplicationSuccess());
                obs.complete();
            });
        })
    );