import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {initialState, PollutionData} from "./getAirPollutionInterface";
import {fetchAirPollution} from "./getAirPollutionThunk";

const airPollutionSlice = createSlice({
    name: 'airPollution',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAirPollution.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export const airPollutionReducer = airPollutionSlice.reducer;