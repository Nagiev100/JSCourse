import {FC} from "react";
import styled from "styled-components";

interface WeatherCardProps {
    o3?: number;
    so2: number;
    pm2_5?: number;
    pm10: number;
    co?:number;
    pm?:number;
}
export const PallutionCard: FC<WeatherCardProps> = ({  co, pm,so2,pm10, }) => {
    return (
        <CardContainer>
            <Container>
                <p>PM10:{pm10}</p>
                <p>SO2:{so2}</p>
                <CO>CO:{co}</CO>
                <p>PM:{pm}</p>
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
  background-color:#F5FBFF;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const CO = styled.p`
    margin: 5px 0 ;
`