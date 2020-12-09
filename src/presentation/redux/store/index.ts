import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { rootEpic } from '../epics';
import { rootReducer } from '../reducers';

const epicMiddleware = createEpicMiddleware();

export const configureStore = () => {
    const middlewares: any = [epicMiddleware];
    middlewares.push(createLogger());
    const store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));

    epicMiddleware.run(rootEpic);

    return store;
};
