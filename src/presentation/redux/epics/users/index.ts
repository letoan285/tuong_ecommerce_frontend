
import { combineEpics, ofType } from "redux-observable";
import { userLoginEpic } from './userLogin';
import { userRegisterEpic } from './userRegister';


export const usersEpics = combineEpics(userLoginEpic, userRegisterEpic);