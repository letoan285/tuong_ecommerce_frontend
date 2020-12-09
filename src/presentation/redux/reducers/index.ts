import { combineReducers } from 'redux';
import { usersReducer } from './users';

const appReducer = combineReducers({
    usersReducer,
});
export const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
}