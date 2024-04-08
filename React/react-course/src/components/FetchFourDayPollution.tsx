import { FC } from 'react';
import { useAppDispatch, useAppSelector } from "../store/store";
import { WeatherForecastResponse } from "../store/reducers/getWeather/getWeatherInterface";
import { fetchAirPollution } from "../store/reducers/getAirPollution/getAirPollutionThunk";
import {t} from "i18next";
import {Button} from "./FetchFiveDayButton";

interface FetchFourDayPollutionProps {
    handleClick: () => void;
}

export const FetchFourDayPollution: FC<FetchFourDayPollutionProps> = ({ handleClick }) => {
    const cities = useAppSelector((state) => state.city.cities);

    const dispatch = useAppDispatch();

    const onClickHandler = async () => {
        try {
            if (!cities || cities.length === 0) {
                console.error('No cities available');
                return;
            }
            const lon = cities[0].longitude;
            const lat = cities[0].latitude

            const action = await dispatch(fetchAirPollution({ lat, lon }));
            const weatherData = action.payload as WeatherForecastResponse;
            console.log("Weather data:", weatherData);
            handleClick();
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    return (
        <div>
            <Button onClick={onClickHandler}>{t("pollution")}</Button>
        </div>
    );
};