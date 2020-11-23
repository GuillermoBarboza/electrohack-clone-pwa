import { combineReducers } from "redux";
import products from "./productsReducer";
import user from "./userReducer";
import cart from "./cartReducer";
import modal from "./modalReducer";

const rootReducer = combineReducers({ products, user, cart, modal });

export default rootReducer;
