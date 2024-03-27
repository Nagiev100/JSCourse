import {useNavigate} from "react-router-dom";
import {ChangeEvent, FC, useRef, useState} from "react";
import {useForm} from "react-hook-form";
import styled from "styled-components";
import {Input} from "../../components/input";
import closeEye from "../../assests/icon/close_eye.svg";
import openEye from "../../assests/icon/eye_rounded.svg";
import clickerPhoto from '../../assests/icon/cllickerPhoto.svg'
import {generateId} from "../../helpers/generateId";
import {validationInputLogin, validationInputPassword} from "../../helpers/validateInput";
import {SignUpSlogan} from "../../components/SignUpSlogan";
import {SignUpPicker} from "../../components/SignUpPicker";
import {PasswordToggle} from "../../components/SignUpPasswordIcon";
import {ErrorContainer} from "../../components/SignUpErrorContainer";
import {SignUpButton} from "../../components/Button";

interface SignUpFormData {
    login: string;
    password: string;
    returnPassword: string;
}

export const SignUp: FC = () => {
    const navigator = useNavigate();
    const [typePassword, setTypePassword] = useState("password");
    const [typeReturnPassword, setTypeReturnPassword] = useState("password");
    const [imageUrl, setImageUrl] = useState<string | undefined>();
    const filePicker = useRef<HTMLInputElement>(null);
    const [password, setPassword] = useState('Vyusal2222');
    const [passwordReturn, setPasswordReturn] = useState('Vyusal2222');
    const [login, setLogin] = useState('Vyusal');

    const {
        handleSubmit,
        register,
        formState: {errors, isValid},
        setError
    } = useForm<SignUpFormData>({
        mode: 'onBlur',
    });

    const onSubmit = (data: SignUpFormData) => {
        if (data.password !== data.returnPassword) {
            setError("returnPassword", {
                type: "manual",
                message: "Passwords do not match",
            });
        } else {
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
                        value={login}
                        borderColor={errors?.login ? "#FF768E" : "#F6F6F6"}
                        id='login'
                        {...register('login', validationInputLogin)}
                    />
                    <ErrorContainer error={errors.login && errors.login.message}/>
                    <ContainerInput>
                        <Label htmlFor='password'>Password</Label>
                        <Input
                            value={password}
                            borderColor={errors?.password ? "#FF768E" : "#F6F6F6"}
                            id='password'
                            type={typePassword}
                            {...register('password', validationInputPassword)}
                        />
                        <PasswordToggle
                            type={typePassword}
                            onToggle={() => setTypePassword(typePassword === 'password' ? 'text' : 'password')}
                            closeEyeSrc={closeEye}
                            openEyeSrc={openEye}
                        />
                        <ErrorContainer error={errors.password && errors.password.message}/>
                    </ContainerInput>
                    <ContainerInput>
                        <Label htmlFor='returnPassword'>Return Password</Label>
                        <Input
                            value={passwordReturn}
                            borderColor={errors?.returnPassword ? "#FF768E" : "#F6F6F6"}
                            id='returnPassword'
                            type={typeReturnPassword}
                            {...register('returnPassword', {required: 'Return Password is required'})}
                        />
                        <PasswordToggle
                            type={typeReturnPassword}
                            onToggle={() => setTypeReturnPassword(typeReturnPassword === 'password' ? 'text' : 'password')}
                            closeEyeSrc={closeEye}
                            openEyeSrc={openEye}
                        />
                        <ErrorContainer error={errors.returnPassword && errors.returnPassword.message}/>
                    </ContainerInput>
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





