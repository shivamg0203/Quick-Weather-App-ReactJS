// import logo from './logo.svg';
// import './App.css';

// import Home from "./component/home";
// import About from "./component/about";
import React from "react";
import {
  BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import PageNotFound from "./component/error404";
import CityComponent from "./component/cities";
import WeatherComponent from "./component/Weather";

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<CityComponent></CityComponent>}/>
            <Route path="/weather" element={<WeatherComponent></WeatherComponent>}/>

            <Route path="*" element={<PageNotFound />}/>
          </Routes>
      </Router>
    </>
  );
}




export default App;

// const [city, updateCity] = useState();
// const [weather, updateWeather] = useState();
// const fetchWeather = async (e) => {
//   e.preventDefault();
//   try{
//     const response = await Axios.get(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
//     );
//     updateWeather(response.data);}
//   catch(error){
//     alert(" Some Error Occured")
//   }
//   };