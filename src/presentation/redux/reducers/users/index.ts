import { combineReducers } from "redux";
import loginReducer from './loginReducer'
import registerReducer from './registerReducer';

const usersReducers = combineReducers({
  loginReducer,
  registerReducer
});

export default usersReducers;