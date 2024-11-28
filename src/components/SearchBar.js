import React from "react";

//Handling Search by City for waether 
const SearchBar = ({ city, setCity, fetchWeather }) => {
    return (
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="See weather of different city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={fetchWeather} // onClick to fecth weather function // use for WeatherApp
          
        >
          Search Weather 
        </button>
      </div>
    );
  };
  
  export default SearchBar;
  