import React, { FC, useState } from "react";
import Select from "react-select";
import { colourStyles } from "../helpers/selectDayStyle";
import { optionsDay } from "../helpers/optionsInputDay";
import styled from "styled-components";

export const InputDay: FC = () => {
    const [day, setDay] = useState<number>(0);

    const updateDay = (selectedOption: any) => {
        setDay(selectedOption.value);
    };
    return (
        <>
            <Label htmlFor='day'>Day</Label>
            <Select
                id='day'
                options={optionsDay}
                onChange={updateDay}
                value={optionsDay.find(optionDay => optionDay.value === day)}
                styles={colourStyles}
                menuPlacement={"top"}
            />
        </>
    );
};
const Label = styled.label`
  margin-bottom: 8px;
`

