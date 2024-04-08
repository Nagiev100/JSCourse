import {FC} from "react";
import styled from "styled-components";

interface WeatherCardProps {
    temperature?: number;
    description?: string;
}
export const WeatherCard: FC<WeatherCardProps> = ({temperature, description }) => {
    return (
        <CardContainer>
            <Container>
                <WeatherInfo>Temperature: {temperature} °C</WeatherInfo>
                <WeatherInfo>Description: {description}</WeatherInfo>
            </Container>
        </CardContainer>
    );
}

const CardContainer = styled.div`
  max-width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  background-color: #F5FBFF;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`


const WeatherInfo = styled.p`
    margin: 5px 0 ;
`