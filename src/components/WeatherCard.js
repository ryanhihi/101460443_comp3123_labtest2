import React from "react";

//Display weather card 
const WeatherCard = ({ weatherData }) => {
    if (!weatherData) return null;
  
    const { name, main, weather, wind } = weatherData;
    const weatherIcon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  
    return (
        <div className="weather-card">
            <h2>{name}</h2>
            <img src={weatherIcon} alt={weather[0].description} />
            <h3>{weather[0].main}</h3>
            <p>{weather[0].description}</p>
            <p className="temperature">
              <strong>Temperature:</strong> {main.temp}°C
            </p>
            <p>
              <strong>Humidity:</strong> {main.humidity}%
            </p>
            <p>
                <strong>Wind Speed:</strong> {wind.speed} m/s
            </p>
            <p>
                <strong>Feel Like:</strong> {main.feels_like}°C
            </p>
            <p>
              <strong>Pressure:</strong> {main.pressure} hPa
            </p>
            
          </div>
        );
      };
  
  export default WeatherCard;