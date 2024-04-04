import { createAsyncThunk } from '@reduxjs/toolkit';
import { Keys } from "../../../helpers/keys";
import {City} from "./getCitySlice";

export const fetchCityName = createAsyncThunk<City[], string>(
    'city/fetchCityName', // Префикс экшена
    async (cityName: string) => {
        try {
            const response = await fetch(`https://api.api-ninjas.com/v1/city?name=${cityName}`, {
                headers: {
                    "X-Api-Key": Keys.NinjaKeys
                }
            });
            if (!response.ok) {
                throw new Error('Failed to fetch city');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);