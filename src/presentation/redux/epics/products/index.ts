
import { combineEpics, ofType } from "redux-observable";
import {productsEpic} from './getProductsEpic';
import {productEpic} from './getProductEpic';

export const productEpics = combineEpics(productsEpic, productEpic);