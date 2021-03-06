import { combineEpics, ofType } from "redux-observable";
import { exhaustMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Axios from "axios";
import { initAppEpic } from "./general/appInitiation";
import {productEpics} from './products';
import { usersEpics } from './users';


export const rootEpic = combineEpics(initAppEpic, productEpics, usersEpics);