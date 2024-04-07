import {createSlice} from "@reduxjs/toolkit";
import {fetchCityName} from "./getCityThunk";
import {initialState} from "./getCityInterface";

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