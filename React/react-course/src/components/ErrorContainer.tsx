import React, { FC } from 'react';
import styled from 'styled-components';

interface ErrorContainerProps {
    error?: string;
}

export const ErrorContainer: FC<ErrorContainerProps> = ({ error }) => {
    return (
        <Container>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    );
};

const Container = styled.div`
  height: 2px;
`;

const ErrorMessage = styled.p`
  color: #ff768e;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
`;
