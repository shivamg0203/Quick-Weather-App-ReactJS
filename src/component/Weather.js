import React from "react";
import styled from "styled-components";
import { WeatherIcons, Container, AppLabel } from "./part";
// import {WeatherIcons, Container, AppLabel} from "./part";
import { useLocation } from "react-router-dom";
export const WeatherInfoIcons = {
    back : "./icons/previous.png",
    sunset: "./icons/temp.svg",
    sunrise: "./icons/temp.svg",
    humidity: "./icons/humidity.svg",
    wind: "./icons/wind.svg",
    pressure: "./icons/pressure.svg",
};




const Location = styled.span`
  margin: 15px auto;
  text-transform: capitalize;
  font-size: 28px;
  font-weight: bold;
`;
const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 14px;
  & span {
    font-size: 28px;
  }
`;
const WeatherInfoLabel = styled.span`
  margin: 20px 25px 10px;
  text-transform: capitalize;
  text-align: start;
  width: 90%;
  font-weight: bold;
  font-size: 14px;
`;
const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin: 5px auto;
`;
const WeatherContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const InfoContainer = styled.div`
  background: linear-gradient(358deg, #aeff5e, #cde7e7);
  box-sizing: border-box;
  border-style: inset;
  border-radius: 150px;
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 36px;
  height: 36px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 15px;
  & span {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]}/>
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
};
const WeatherComponent = (props) => {
    // const {weather} = props;
    const location= useLocation()
    const {weather} = location.state;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <><Container>
          <AppLabel><a className="fanh" href="/"><img height={'15px'} width={'15px'} src={WeatherInfoIcons.back} alt="Back"/> Home</a></AppLabel>
            <WeatherContainer>
                <Condition>
                    <span>{`${Math.floor(weather.main.temp - 273)}°C`}</span>
                    {`  |  ${weather.weather[0].description}`}
                </Condition>
                <WeatherIcon src={WeatherIcons[weather.weather[0].icon]}/>
            </WeatherContainer>
            <Location>{`${weather.name}, ${weather.sys.country}`}</Location>

            <WeatherInfoLabel>More Infos</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"}
                                      value={`${getTime(weather.sys[isDay ? "sunset" : "sunrise"])}`}/>
                <WeatherInfoComponent name={"humidity"} value={weather.main.humidity}/>
                <WeatherInfoComponent name={"wind"} value={weather.wind.speed}/>
                <WeatherInfoComponent name={"pressure"} value={weather.main.pressure}/>
            </WeatherInfoContainer>
            </Container>
        </>
    );
};

export default WeatherComponent;