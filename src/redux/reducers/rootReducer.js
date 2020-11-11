import products from "./productsReducer";
import user from './userReducer'
import { combineReducers } from "redux";
import cart from './cartReducer'

const rootReducer = combineReducers({ products, user, cart });

export default rootReducer;
