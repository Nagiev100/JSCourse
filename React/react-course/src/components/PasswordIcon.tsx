import React, { FC } from 'react';
import styled from 'styled-components';

interface PasswordToggleProps {
    type: string;
    onToggle: () => void;
    closeEyeSrc: string;
    openEyeSrc: string;
}

export const PasswordToggle: FC<PasswordToggleProps> = ({ type, onToggle, closeEyeSrc, openEyeSrc }) => {
    return (
        <ContainerIcon onClick={onToggle}>
            <img src={type === 'password' ? closeEyeSrc : openEyeSrc} alt={'Icon'}/>
        </ContainerIcon>
    );
};

const ContainerIcon = styled.div`
  position: absolute;
  content: "";
  top: 62px;
  left: 340px;
`;

