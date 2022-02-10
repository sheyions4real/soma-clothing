import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // return the window object to create the storage for persist as local storage
//import sessionStorage from "redux-persist/es/storage/session"; // return the session object to use sessionStorage as storage option for redux persist 


//list of all our reducers i.e each state from different module of our application
import userReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

// define a new persist config for redux persist
const persistConfig ={
    key:'root',
    storage,        // the storage we want to use for the persist [window.localStorage]
    whitelist: ['cart']     // list what you want to persist in local storage
}

const rootReducer = combineReducers({
    user:userReducer,
    cart:CartReducer,
    directory:directoryReducer,
    shop:shopReducer

});

export default persistReducer(persistConfig, rootReducer)  // configuring our reducer to use persist reducer


