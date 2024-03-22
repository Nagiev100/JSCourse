import {FC} from "react";
import {useForm} from "react-hook-form";
import styled from "styled-components";

interface SignUpFormData {
    login: string;
    password: string;
    returnPassword: string;
}
export const SignUp : FC = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isValid },
        setError,
    } = useForm<SignUpFormData>({
        mode: "onBlur",
    });

    return(
        <>
            <Container>
              <Wrapper>

              </Wrapper>
            </Container>
        </>
    )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
`
const Wrapper = styled.div`
  background-color: white;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`