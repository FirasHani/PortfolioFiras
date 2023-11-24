import { combineReducers } from "redux";
import authReducer from './auth'
import contact from "./contact";
import project from "./project";

export default combineReducers({
    authReducer,
    contact,
    project
})