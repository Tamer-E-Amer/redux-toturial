// this is a helper file that export all reducers by combineReducers function that accept an object with key and value.

import { combineReducers } from "redux";
import counterThunkReducer from "./counterThunkReducer";
import userReducer from "./userReducer";

export default combineReducers({
    counterReducer:counterThunkReducer,
    userReducer:userReducer
})