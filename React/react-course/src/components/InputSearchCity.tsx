import React, { FC, useState, useEffect } from "react";
import Select from "react-select";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../store/store";
import { fetchCityName } from "../store/reducers/getCity/getCityThunk";
import {City} from "../store/reducers/getCity/getCityInterface";
import {colourStyles} from "../helpers/selectDayStyle";




export const SearchCity: FC = () => {
    const [cityInput, setCityInput] = useState<string>('');
    const [options, setOptions] = useState<{ value: string; label: string }[]>([]);
    const dispatch = useAppDispatch();
    const cities = useAppSelector((state) => state.city.cities);

    useEffect(() => {
        if (cityInput) {
            dispatch(fetchCityName(cityInput));
        }
    }, [cityInput, dispatch]);

    useEffect(() => {
        if (cities) {
            const cityOptions = cities.map((city: City) => ({ value: city.name, label: city.name }));
            setOptions(cityOptions);
        }
    }, [cities]);

    const handleInputChange = (inputValue: string) => {
        setCityInput(inputValue);
    };

    return (
        <>
            <Label htmlFor='city'>City</Label>
            <Select
                styles={colourStyles}
                id='city'
                inputValue={cityInput}
                options={options}
                onInputChange={handleInputChange}
            />
        </>
    );
};

const Label = styled.label`
    margin-top: 8px;
`;