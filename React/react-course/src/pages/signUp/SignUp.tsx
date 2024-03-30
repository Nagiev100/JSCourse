import {useNavigate} from "react-router-dom";
import {ChangeEvent, FC, useRef, useState} from "react";
import {useForm} from "react-hook-form";
import styled from "styled-components";
import {InputStyle} from "../../helpers/inputStyle";
import clickerPhoto from '../../assests/icon/cllickerPhoto.svg'
import {generateId} from "../../helpers/generateId";
import {
    validatinInputConfirmPassword,
    validationInputLogin,
    validationInputPassword
} from "../../helpers/validateInput";
import {SignUpSlogan} from "../../components/SignUpSlogan";
import {SignUpPicker} from "../../components/SignUpPicker";
import {ErrorContainer} from "../../components/SignUpErrorContainer";
import {SignUpButton} from "../../components/Button";
import {COLORS} from "../../helpers/Colors";
import {InputNavigation} from "../../components/Input";

export interface SignUpFormData {
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

    const {
        handleSubmit,
        getValues,
        register,
        formState: {errors, isValid},
    } = useForm<SignUpFormData>({
        mode: 'onBlur',
    });

    const onSubmit = (data: SignUpFormData) => {
        const newToken = generateId();
        if (newToken) {
            localStorage.setItem("token", newToken);
            localStorage.setItem("login", data.login);
            if (imageUrl) {
                localStorage.setItem('img', imageUrl)
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
                    <InputStyle
                        borderColor={errors?.login ? COLORS.Red : COLORS.White}
                        id='login'
                        {...register('login', validationInputLogin)}
                    />
                    <ErrorContainer error={errors.login && errors.login.message}/>
                    <InputNavigation errors={errors.password} type={typePassword}
                                     register={register('password', validationInputPassword)}
                                     onToggle={() => setTypePassword(typePassword === 'password' ? 'text' : 'password')}
                                     id={'password'}
                    />

                    <InputNavigation errors={errors.returnPassword} type={typeReturnPassword}
                                     register={register('returnPassword', validatinInputConfirmPassword(getValues))}
                                     onToggle={() => setTypeReturnPassword(typeReturnPassword === 'password' ? 'text' : 'password')}
                                     id={'returnPassword'}
                    />

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






