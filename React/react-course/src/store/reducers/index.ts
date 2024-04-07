import {combineReducers} from "@reduxjs/toolkit";
import {userReducer} from "./getUserData/userReducer";
import {cityReducer} from "./getCity/getCitySlice";
import {weatherReducer} from "./getWeather/getWeatherSlice";
import {airPollutionReducer} from "./getAirPollution/getAirPollutionSlice";
import {languageReducer} from "./getLocation/sliceReducer";

export const rootReducer = combineReducers({
    location: languageReducer,
    airPollution: airPollutionReducer,
    weatherFiveDay: weatherReducer,
    user: userReducer,
    city: cityReducer
})