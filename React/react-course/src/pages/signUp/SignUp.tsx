import {useNavigate} from "react-router-dom";
import {ChangeEvent, FC, useRef, useState} from "react";
import {FieldError, useForm, UseFormRegisterReturn} from "react-hook-form";
import styled from "styled-components";
import {Input} from "../../components/input";
import closeEye from "../../assests/icon/close_eye.svg";
import openEye from "../../assests/icon/eye_rounded.svg";
import clickerPhoto from '../../assests/icon/cllickerPhoto.svg'
import {generateId} from "../../helpers/generateId";
import {
    validatinInputConfirmPassword,
    validationInputLogin,
    validationInputPassword
} from "../../helpers/validateInput";
import {SignUpSlogan} from "../../components/SignUpSlogan";
import {SignUpPicker} from "../../components/SignUpPicker";
import {PasswordToggle} from "../../components/SignUpPasswordIcon";
import {ErrorContainer} from "../../components/SignUpErrorContainer";
import {SignUpButton} from "../../components/Button";

export interface SignUpFormData {
    login: string;
    password: string;
    returnPassword: string;
}

function InputNavigation(props: { errors?:FieldError , type: string, register: UseFormRegisterReturn<string>, onToggle: () => void }) {
    return <ContainerInput>
        <Label htmlFor="password">Password</Label>
        <Input
            /* value={password}*/
            borderColor={props.errors ? "#FF768E" : "#F6F6F6"}
            id="password"
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

export const SignUp: FC = () => {
    const navigator = useNavigate();
    const [typePassword, setTypePassword] = useState("password");
    const [typeReturnPassword, setTypeReturnPassword] = useState("password");
    const [imageUrl, setImageUrl] = useState<string | undefined>();
    const filePicker = useRef<HTMLInputElement>(null);
   /* const [password, setPassword] = useState('Vyusal2222');
    const [passwordReturn, setPasswordReturn] = useState('Vyusal2222');
    const [login, setLogin] = useState('Vyusal');*/

    const {
        handleSubmit,
        getValues,
        register,
        formState: {errors, isValid},
        setError
    } = useForm<SignUpFormData>({
        mode: 'onBlur',
    });

    const onSubmit = (data: SignUpFormData) => {
        const newToken = generateId();
            if (newToken) {
                localStorage.setItem("token", newToken);
                localStorage.setItem("login", data.login);
                if (imageUrl){
                    localStorage.setItem('img',imageUrl)
                }
                navigator('/');
            } else {
                console.error('Error generating token');
            }

    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImageUrl(imageURL);
        }
    };

    const handlePick = () => {
        if (filePicker.current !== null) {
            filePicker.current.click();
        }
    };

    return (
        <Container>
            <Wrapper>
                <SignUpSlogan>Sign Up</SignUpSlogan>
                <SignUpPicker backgroundImage={imageUrl} onClick={handlePick}>
                    <img src={clickerPhoto} alt="icon"/>
                </SignUpPicker>
                <FormSignUp onSubmit={handleSubmit(onSubmit)}>
                    <Label htmlFor='login'>Login</Label>
                    <Input
                        /* value={login}*/
                        borderColor={errors?.login ? "#FF768E" : "#F6F6F6"}
                        id='login'
                        {...register('login', validationInputLogin)}
                    />
                    <ErrorContainer error={errors.login && errors.login.message}/>
                    <InputNavigation errors={errors.password} type={typePassword}
                                     register={register('password', validationInputPassword)}
                                     onToggle={() => setTypePassword(typePassword === 'password' ? 'text' : 'password')}/>

                    <InputNavigation errors={errors.returnPassword} type={typeReturnPassword}
                                     register={register('returnPassword', validatinInputConfirmPassword(getValues))}
                                     onToggle={() => setTypeReturnPassword(typeReturnPassword === 'password' ? 'text' : 'password')}/>

                    <SignUpButton type={'submit'} disabled={!isValid || !imageUrl}>Submit</SignUpButton>
                    <FileInput
                        type="file"
                        ref={filePicker}
                        onInputCapture={handleFileChange}
                    />
                </FormSignUp>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #F5FBFF;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

`
const FileInput = styled.input`
  opacity: 0;
  height: 0;
  width: 0;
  line-height: 0;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;
const FormSignUp = styled.form`
  display: flex;
  flex-direction: column;
`
const Label = styled.label`
  color: #344472;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  margin-top: 26px;
`
const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;





