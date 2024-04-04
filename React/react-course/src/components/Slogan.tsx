import React, {FC, ReactNode} from 'react';
import styled from 'styled-components';

interface SignUpHeaderProps {
    children: ReactNode;
}

export const Slogan: FC<SignUpHeaderProps> = ({ children }) => {
    return <SloganSignUp>{children}</SloganSignUp>;
};

const SloganSignUp = styled.h2`
  color: #344472;
  width: 130px;
  height: 50px;
  font-size: 36px;
  font-weight: 400;
  margin: 0 auto;
`;