import { combineReducers } from "redux";
import isLoggerReducer from "./LoggedIn";
import counterReducer from "./Counter";

const allReducer=combineReducers({
    counter:counterReducer,
    LoggedIn:isLoggerReducer
})
export default allReducer;