import { createAsyncThunk} from '@reduxjs/toolkit';
import {Keys} from "../../../helpers/keys";


export const fetchWeatherForecast = createAsyncThunk(
    'weather/fetchWeatherForecast',
    async ({ city, language }: { city: string, language: string }) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Keys.OpenWeather}&lang=${language}`);
            if (!response.ok) {
                throw new Error('Failed to fetch weather forecast');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error('Failed to fetch weather forecast');
        }
    }
);