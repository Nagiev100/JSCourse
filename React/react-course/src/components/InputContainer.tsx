import React, { FC } from "react";
import styled from "styled-components";
import {COLORS} from "../helpers/style/colors";

interface InputProps {
    id?: string;
    type?: string;
    borderColor?: string;
    register?: any; // Предполагается, что register имеет тип any. Лучше заменить на конкретный тип, если возможно.
}

export const InputА: FC<InputProps> = ({ id, type, borderColor, register }) => {
    return (
        <StyledInput
            id={id}
            type={type}
            borderColor={borderColor}
            {...register} // Использование register для зарегистрирования поля формы
        />
    );
};

const StyledInput = styled.input<InputProps>`
    width: 300px;
    height: 200px;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    border-radius: 4px;
    outline: none;
    border: ${(props) => `1px solid ${props.borderColor || COLORS.White}`};
    &:hover {
        background-color: #d1d1d1;
    }
    &:focus {
        background-color: #f6f6f6;
        box-shadow: 0px 0px 5px 0px #d9d9d9;
    }
    @media ${(props) => props.theme.mobile} {
        width: 100%;
        height: 40px;
    }
    @media ${(props) => props.theme.tablet} {
        width: 100%;
        height: 40px;
    }
`;