import { combineReducers } from "redux";
import productReducer from "./productReducer/productReducer";
import cartReducer from "./cartReducer/cartReducer";

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
    //any Reducer
});

export default rootReducer;