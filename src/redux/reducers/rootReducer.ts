import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { pageReducer } from "./page";
import { registrationPageReducer } from "./registrationPage";


const rootReducer = combineReducers({
    user: userReducer,
    page: pageReducer,
    registrationPage: registrationPageReducer,
})


export default rootReducer;