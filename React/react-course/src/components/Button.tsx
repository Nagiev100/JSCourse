import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface SignUpButtonProps {
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
    children: ReactNode;
    width?:string;
    height?:string;
}

export const SignUpButton: FC<SignUpButtonProps> = ({type = "button", onClick, disabled, children}) => {
    return (
        <ButtonSignUp type={type} onClick={onClick} disabled={disabled}>
            {children}
        </ButtonSignUp>
    );
};

const ButtonSignUp = styled.button<SignUpButtonProps>`
  background-color: #e4163a;
  color: #ffffff;
  border: none;
  padding: 0;
  width: ${(props) => props.width || "365px"};
  margin-top: 24px;
  height: ${(props) => props.height || "40px"};

  &:hover {
    background-color: #ff5761;
  }

  &:active {
    background-color: #c60e2e;
  }

  &:disabled {
    background-color: #f6f6f6;
    color: #d1d1d1;
  }
`;

