import { createAsyncThunk } from '@reduxjs/toolkit';
import { Keys } from "../../../helpers/keys";


export const fetchAirPollution = createAsyncThunk(
    'air/fetchAirPollution',
    async ({ lat, lon }: { lat: number; lon: number })=> {
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${Keys.OpenWeather}`);
            if (!response.ok) {
                throw new Error('Failed to fetch air pollution data');
            }
            const data  = await response.json();
            return data;
        }catch (error){
            return console.log(error)
        }

    }
);