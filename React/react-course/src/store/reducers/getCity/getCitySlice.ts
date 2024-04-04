import {createSlice} from "@reduxjs/toolkit";
import {fetchCityName} from "./getCityThunk";

export interface City {
    country: string;
    is_capital: boolean;
    latitude: number;
    longitude: number;
    name: string;
    population: number;
}

interface CityState {
    cities: City[] | null;
    error: string | null;
}

const initialState: CityState = {
    cities: null,
    error: null,
};


export const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        setError(state, action) {
            state.error = action.payload;
        },
        clearError(state) {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCityName.fulfilled, (state, action) => {
            state.cities = action.payload;
        });
    }
});

export const { setError, clearError } = citySlice.actions;

export const cityReducer = citySlice.reducer;