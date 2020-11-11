import { combineReducers } from "redux";
import products from "./productsReducer";
import user from "./userReducer";
import cart from "./cartReducer";
import carousel from "./carouselReducer";

const rootReducer = combineReducers({ products, user, cart, carousel });

export default rootReducer;
