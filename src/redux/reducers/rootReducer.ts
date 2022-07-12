import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { pageReducer } from "./page";


const rootReducer = combineReducers({
    user: userReducer,
    page: pageReducer,
})


export default rootReducer;