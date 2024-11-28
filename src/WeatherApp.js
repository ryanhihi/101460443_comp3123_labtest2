import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar"; //using SearchBar
import WeatherCard from "./components/WeatherCard"; //Using WeatherCard
import { useEffect } from "react";//to fetch Toronto weather as default
const WeatherApp = () => {
    //Use state to handle data
    const [city, setCity] = useState("Toronto"); //Set default city
    const [weatherData, setWeatherData] = useState(null);
    //Error handling 
    const [error, setError] = useState("");

    

    //fetch weather data from API 
    const fetchWeather = async () => {
        setError("");
        try {
            const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
            const response = await axios.get(
                //Using this API endpoint for dynamic search too
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );
            setWeatherData(response.data);
        } catch (err) {
          setError("Failed to fetch weather data. Please try again.");
          setWeatherData(null);
        }
      };
      //Load Toronto weather as default

      useEffect(() => {
        fetchWeather();
      }, []);



return (
    <div className="weather-app">
      <h1>Weather Forecast</h1>
      {/*Display Weather Search by City bar*/}
      <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/*Display Weather Card data*/}
      <WeatherCard weatherData={weatherData} />
    </div>
  );
};





export default WeatherApp;