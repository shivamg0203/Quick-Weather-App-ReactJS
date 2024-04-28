// import { all } from "axios";
import styled from "styled-components";
const WeatherIcons = {
    "01d": "./icons/sunny.svg",
    "01n": "./icons/night.svg",
    "02d": "./icons/day.svg",
    "02n": "./icons/cloudy-night.svg",
    "03d": "./icons/cloudy.svg",
    "03n": "./icons/cloudy.svg",
    "04d": "./icons/perfect-day.svg",
    "04n": "./icons/cloudy-night.svg",
    "09d": "./icons/rain.svg",
    "09n": "./icons/rain-night.svg",
    "10d": "./icons/rain.svg",
    "10n": "./icons/rain-night.svg",
    "11d": "./icons/storm.svg",
    "11n": "./icons/storm.svg",
  };
  
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 380px;
    padding: 20px 10px;
    margin: auto;
    border-radius: 4px;
    box-shadow: 0 3px 6px 0 #555;
    background: linear-gradient(rgb(114 126 242), rgb(53 255 145));
    font-family: Montserrat;
  `;
  
  const AppLabel = styled.span`
    color: black;
    margin: 20px auto;
    font-size: 18px;
    font-weight: bold;
  `;
  const CloseButton = styled.span`
    padding: 2px 3px;
    background-color: black;
    border-radius: 50%;
    color: white;
    position: absolute;
  `;
  export {WeatherIcons, Container,AppLabel,CloseButton}