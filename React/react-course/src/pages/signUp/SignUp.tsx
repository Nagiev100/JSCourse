import {ChangeEvent, FC, useRef, useState} from "react";
import {useForm} from "react-hook-form";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {Input} from "../../components/input/input";
import closeEye from "../../assests/icon/close_eye.svg";
import openEye from "../../assests/icon/eye_rounded.svg";
import cllickerPhoto from '../../assests/icon/cllickerPhoto.svg'

interface SignUpFormData {
    login: string;
    password: string;
    returnPassword: string;
}

export const SignUp: FC = () => {
    const [typePassword, setTypePassword] = useState("password");
    const [typeReturnPassword, setTypeReturnPassword] = useState("password");
    const [imageUrl, setImageUrl] = useState<string | undefined>();
    const filePicker = useRef<HTMLInputElement>(null);
    const navigator = useNavigate();
    const {
        handleSubmit,
        register,
        formState: {errors, isValid},
        setError
    } = useForm<SignUpFormData>({
        mode: 'onBlur',
    });

    const onSubmit = async (data: SignUpFormData) => {
        if (data.password !== data.returnPassword) {
            setError("returnPassword", {
                type: "manual",
                message: "Passwords do not match",
            });
        } else {
            try {
                navigator('/Home')
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        }
    };
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Преобразование изображения в URL
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
                <SloganSignUp>Sign Up</SloganSignUp>
                <ContainerPicker backgroundImage={imageUrl} onClick={handlePick}>
                    <img src={cllickerPhoto} alt='icon'/>
                </ContainerPicker>
                <FormSignUp onSubmit={handleSubmit(onSubmit)}>
                    <Label htmlFor='login'>Login</Label>
                    <Input
                        borderColor={errors?.login ? "#FF768E" : "#F6F6F6"}
                        id='login'
                        {...register('login', {
                            required: 'Login is required',
                            minLength: {
                                value: 6,
                                message: 'The minimum login length should be at least 6 characters'
                            },
                            maxLength: {
                                value: 12,
                                message: 'The maximum login length should be no more than 12 characters'
                            }

                        })}
                    />
                    <ContainerErrors>
                        {errors.login && <ErrorsP>{errors.login.message}</ErrorsP>}
                    </ContainerErrors>
                    <ContainerInput>
                        <Label htmlFor='password'>Password</Label>
                        <Input
                            borderColor={errors?.password ? "#FF768E" : "#F6F6F6"}
                            id='password'
                            type={typePassword}
                            {...register('password', {
                                required: 'Password is required',
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[0-9]).+$/,
                                    message: "Password must contain at least one uppercase letter and one digit",
                                },
                                minLength: {
                                    value: 8,
                                    message: 'The minimum password length should be 8 characters'
                                },
                                maxLength: {
                                    value: 14,
                                    message: 'The maximum password length should be 14 characters'
                                }
                            })}
                        />
                        {typePassword === "password" ? (
                            <ContainerIcon onClick={() => setTypePassword("text")}>
                                <img src={closeEye} alt={'Icon'}/>
                            </ContainerIcon>
                        ) : (
                            <ContainerIcon onClick={() => setTypePassword("password")}>
                                <img src={openEye} alt={'Icon'}/>
                            </ContainerIcon>
                        )}
                        <ContainerErrors>
                            {errors.password && <ErrorsP>{errors.password.message}</ErrorsP>}
                        </ContainerErrors>
                    </ContainerInput>
                    <ContainerInput>
                        <Label htmlFor='returnPassword'>Return Password</Label>
                        <Input
                            borderColor={errors?.returnPassword ? "#FF768E" : "#F6F6F6"}
                            id='returnPassword'
                            type={typeReturnPassword}
                            {...register('returnPassword', {required: 'Return Password is required'})}
                        />
                        {typeReturnPassword === "password" ? (
                            <ContainerIcon onClick={() => setTypeReturnPassword("text")}>
                                <img src={closeEye} alt={'Icon'}/>
                            </ContainerIcon>
                        ) : (
                            <ContainerIcon
                                onClick={() => setTypeReturnPassword("password")}
                            >
                                <img src={openEye} alt={'Icon'}/>
                            </ContainerIcon>
                        )}
                        <ContainerErrors>
                            {errors.returnPassword && <ErrorsP>{errors.returnPassword.message}</ErrorsP>}
                        </ContainerErrors>
                    </ContainerInput>
                    <ButtonSignUp type='submit' disabled={!isValid || !imageUrl}>
                        Submit
                    </ButtonSignUp>
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
const ContainerPicker = styled.div<{ backgroundImage?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => props.backgroundImage && `url(${props.backgroundImage})`};
  background-color: grey;
  background-size: cover;
  width: 300px;
  height: 200px;
  border: 1px solid black;
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
const SloganSignUp = styled.h2`
  color: #344472;
  width: 130px;
  height: 50px;
  font-size: 36px;
  font-weight: 400;
  margin: 0 auto;
`
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
const ContainerErrors = styled.div`
  height: 2px;
`;
const ErrorsP = styled.p`
  color: #ff768e;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
`;
const ContainerIcon = styled.div`
  position: absolute;
  content: "";
  top: 62px;
  left: 340px;
`;
const ButtonSignUp = styled.button`
  background-color: #e4163a;
  color: #ffffff;
  border: none;
  padding: 0;
  width: 365px;
  margin-top: 24px;
  height: 40px;

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
`
const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;





