import {combineReducers} from "@reduxjs/toolkit";
import {userReducer} from "./getUserData/userReducer";
import {cityReducer} from "./getCity/getCitySlice";

export const rootReducer = combineReducers({
    user: userReducer,
    city: cityReducer
})