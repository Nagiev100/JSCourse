import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchWeatherForecast } from "../store/reducers/getWeather/getWeatherThunk";
import { WeatherForecastResponse } from "../store/reducers/getWeather/getWeatherInterface";
import { t } from 'i18next';
import styled from "styled-components";

interface FetchFiveDayButtonProps {
    handleClick: () => void;
}

export const FetchFiveDayButton: FC<FetchFiveDayButtonProps> = ({ handleClick }) => {
    const cities = useAppSelector((state) => state.city.cities);
    const language = useAppSelector((state) => state.location.language);

    const dispatch = useAppDispatch();

    const onClickHandler = async () => {
        try {
            if (!cities || cities.length === 0) {
                console.error('No cities available');
                return;
            }
            const cityName = cities[0].name;
            const action = await dispatch(fetchWeatherForecast({ city: cityName, language: language }));
            const weatherData = action.payload as WeatherForecastResponse;
            console.log("Weather data:", weatherData);
            handleClick();
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    return (
        <div>
            <Button onClick={onClickHandler}>{t("fiveDay")}</Button>
        </div>
    );
};

export const Button = styled.button`
  background-color: #e4163a;
  color: #ffffff;
  border: none;
  padding: 5px;
  

  &:hover {
    background-color: #ff5761;
  }

  &:active {
    background-color: #c60e2e;
  } ;

`