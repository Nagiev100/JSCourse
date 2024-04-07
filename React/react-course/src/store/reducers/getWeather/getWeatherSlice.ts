import { createSlice} from '@reduxjs/toolkit';
import {fetchWeatherForecast} from "./getWeatherThunk";
import {WeatherForecastResponse} from "./getWeatherInterface";



const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        data: null as WeatherForecastResponse | null,
        loading: false,
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeatherForecast.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchWeatherForecast.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchWeatherForecast.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch weather forecast';
        });
    },
});

export const weatherReducer =  weatherSlice.reducer;