import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import auth from "./auth";
import attendance from "./attend";


export default combineReducers({
    formReducer,
    auth,
    attendance
});