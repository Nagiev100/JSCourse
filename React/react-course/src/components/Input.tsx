import {FieldError, UseFormRegisterReturn} from "react-hook-form";
import {InputStyle} from "../helpers/inputStyle";
import {COLORS} from "../helpers/Colors";
import {PasswordToggle} from "./SignUpPasswordIcon";
import closeEye from "../assests/icon/close_eye.svg";
import openEye from "../assests/icon/eye_rounded.svg";
import {ErrorContainer} from "./SignUpErrorContainer";
import styled from "styled-components";

export function InputNavigation(props: { errors?: FieldError, type: string, register: UseFormRegisterReturn<string>, onToggle: () => void, id: string }) {
    return <ContainerInput>
        <Label htmlFor={props.id}>Password</Label>
        <InputStyle
            borderColor={props.errors ? COLORS.Red : COLORS.White}
            id={props.id}
            type={props.type}
            {...props.register}
        />
        <PasswordToggle
            type={props.type}
            onToggle={props.onToggle}
            closeEyeSrc={closeEye}
            openEyeSrc={openEye}
        />
        <ErrorContainer error={props.errors && props.errors.message}/>
    </ContainerInput>;
}

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Label = styled.label`
  color: #344472;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 26px;
`