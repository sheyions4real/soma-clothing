import { createStore, applyMiddleware } from "redux";

import { persistStore } from "redux-persist";
import logger from "redux-logger"; // redux middle ware
//This library logs actions in developer console, giving traceable stack of user actions

import rootReducer from "./root-reducer";

 const middlewares =[logger];

  export const store = createStore(rootReducer, applyMiddleware(...middlewares));

 export const persistor = persistStore(store);






