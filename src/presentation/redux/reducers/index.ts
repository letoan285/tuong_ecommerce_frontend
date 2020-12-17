import { combineReducers } from 'redux';
import usersReducer from './users';
import {productsReducer} from './products';
import { cartsReducer } from './carts'

const appReducer = combineReducers({
    usersReducer,
    productsReducer,
    cartsReducer
});
export const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
}