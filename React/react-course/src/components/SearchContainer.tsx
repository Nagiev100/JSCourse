import React, { FC } from "react";
import styled from "styled-components";
import {SearchCity} from "./InputSearchCity";


export const SearchContainer: FC = () => {

    return (
        <Container>
            <SearchCity/>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
`;