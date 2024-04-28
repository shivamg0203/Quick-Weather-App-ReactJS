import styled from "styled-components";
import {React,useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Container, AppLabel} from "./part";

import Axios from "axios";


const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;

  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  }
  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
`;
const ChooseCityLabel = styled.span`
  color: black;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;
const WelcomeWeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;
const CityComponent = (props) => {
  const navigate = useNavigate();
  const [city, updateCity] = useState("");
  const fetchWeather = async (e) => {
    e.preventDefault();
    try{
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
      );

      navigate('/weather',{state:{weather:response.data}}) // your data array of objects)
    }
    catch(error){
      console.log(error)
      alert(" Some Error Occured")
    }
      
    }
  return (
    <>
    <Container><AppLabel>Weather App</AppLabel>
      <WelcomeWeatherLogo src={"./icons/perfect-day.svg"} />
      <ChooseCityLabel>Enter City Name Below</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"} disabled={!String(city).trim()} >Search</button>
      </SearchBox>
      </Container>
    </>
  );
};
export default CityComponent;