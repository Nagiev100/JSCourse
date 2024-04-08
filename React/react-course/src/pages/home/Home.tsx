import React, {FC, useState} from 'react';
import { SearchContainer } from '../../components/SearchContainer';
import { useNavigate } from 'react-router-dom';
import { FetchFiveDayButton } from '../../components/FetchFiveDayButton';
import { useAppSelector } from '../../store/store';
import { WeatherCard } from "../../components/WeatherCard";
import { FetchFourDayPollution } from "../../components/FetchFourDayPollution";
import { SwitcherLocation } from "../../components/SwitcherLocation";
import styled from "styled-components";
import { PallutionCard } from "../../components/PallutionCard";
import {Menu} from "../../components/HamburgerMenu";
import {WeatherData} from "../../store/reducers/getWeather/getWeatherInterface";
import {PollutionListItem} from "../../store/reducers/getAirPollution/getAirPollutionInterface";
import {useTranslation} from "react-i18next";
import {ThemeToggle} from "../../components/ThemeToggle";


interface Props {
    themeToggler: () => void,
    theme:string
}

export const Home: FC <Props>= ({themeToggler,theme}) => {
    const navagot = useNavigate();
    const weatherData = useAppSelector((state) => state.weatherFiveDay.data);
    const pollutionData = useAppSelector(state => state.airPollution.list);
    const [showWeather, setShowWeather] = useState(true);
    const {t} = useTranslation()
    const out = () => {
        localStorage.removeItem('token');
        navagot('SignUp');
    };

    return (
        <ContainerHome>
            <ContainerParams>
                <Wrapper>
                    <FetchFiveDayButton handleClick={() => setShowWeather(true)} />
                    <FetchFourDayPollution handleClick={() => setShowWeather(false)} />
                    <ThemeToggle themeToggler={themeToggler} theme={theme}/>
                </Wrapper>
                <Wrapper>
                    <SearchContainer />
                    <SwitcherLocation />
                    <ButtonOut onClick={out}>{t("out")}</ButtonOut>
                    <Menu/>
                </Wrapper>
            </ContainerParams>
            <ContainerCard>
                {showWeather && weatherData ? (
                    weatherData.list.slice(0, 5).map((weatherItem:WeatherData) => (
                        <WeatherCard
                            key={weatherItem.dt}
                            temperature={weatherItem.main.temp}
                            description={weatherItem.weather[0].description}
                        />
                    ))
                ) : null}

                {!showWeather && pollutionData ? (
                    pollutionData.slice(0, 4).map((pollutionItem:PollutionListItem) => (
                        <PallutionCard
                            key={pollutionItem.dt}
                            co={pollutionItem.components.co}
                            pm={pollutionItem.components.nh3}
                            pm2_5={pollutionItem.components.pm2_5}
                            pm10={pollutionItem.components.pm10}
                            so2={pollutionItem.components.so2}
                        />
                    ))
                ) : null}
            </ContainerCard>
        </ContainerHome>
    );
};

const ContainerHome = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({theme}) => theme.bodyBackground};
`
const ContainerParams = styled.div`
 display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.bodyBackground};
`
const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
`
const Wrapper = styled.div`
  display: flex;
  column-gap: 2vw;
  background-color: ${({theme}) => theme.bodyBackground};
`
const ButtonOut = styled.button`
  background-color: #e4163a;
  color: #ffffff;
  border: none;
  padding: 0;
  width: 60px;
  height: 40px;

  &:hover {
    background-color: #ff5761;
  }

  &:active {
    background-color: #c60e2e;
  } ;

`