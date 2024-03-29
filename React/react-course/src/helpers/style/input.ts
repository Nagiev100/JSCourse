import styled from "styled-components";

interface InputComponent {
    borderColor?: string;
}

export const Input = styled.input<InputComponent>`
  width: 300px;
  height: 200px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  border-radius: 4px;
  outline: none;
  border: ${(props) => `1px solid ${props.borderColor || "#F6F6F6"}`};
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
