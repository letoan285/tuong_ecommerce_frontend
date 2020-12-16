
import { combineEpics, ofType } from "redux-observable";
import {userLoginEpic} from './userLogin';


export const usersEpics = combineEpics(userLoginEpic);