import React, {FC, ReactNode} from 'react';
import styled from 'styled-components';

interface SignUpPickerProps {
    backgroundImage?: string;
    onClick: () => void;
    children?: ReactNode;
}

export const SignUpPicker: FC<SignUpPickerProps> = ({backgroundImage, onClick, children,}) => {
    return (
        <ContainerPickerWrapper backgroundImage={backgroundImage} onClick={onClick}>
            {children}
        </ContainerPickerWrapper>
    );
};

const ContainerPickerWrapper = styled.div<{ backgroundImage?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => props.backgroundImage && `url(${props.backgroundImage})`};
  background-color: grey;
  background-size: cover;
  width: 300px;
  height: 200px;
  border: 1px solid black;
`;