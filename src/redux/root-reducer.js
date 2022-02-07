import { combineReducers } from "redux";

//list of all our reducers i.e each state from different module of our application
import userReducer from "./user/user.reducer";
import CartReducer from "./cart/cart-reducer";

export default combineReducers({
    user:userReducer,
    cart:CartReducer
});


