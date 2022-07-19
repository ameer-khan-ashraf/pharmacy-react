import { combineReducers } from "redux";

import products from './products'
import auth from './auth'
import product from "./product";
import history from './history'

export default combineReducers({
    products,
    auth,
    product,
    history
});