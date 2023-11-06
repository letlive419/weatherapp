import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Weather() {
    const api = process.env.REACT_APP_API_KEY;
    const [dataToShow, setDataToShow] = useState(null);
    const [error, setError] = useState(null);
    //axios method to get data
    useEffect(() => {
      // defining the function inside useEffect
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=miami&appid=${api}&units=imperial`
          );
          // handle success
          setDataToShow(response.data.main.temp); // set state with the temperature data
        } catch (error) {
          // handle error
          setError(error);
          console.error("Error fetching data: ", error);
        }
      }
      fetchData();
    });
       
      

      if (dataToShow === null && error === null) {
        return <div>Loading...</div>;
      }
    
      // Display error message if request failed
      if (error) {
        return <div>Error fetching data.</div>;
      }
    

    return(
        <div class="weather-widget">
        <div class="search-box">
          <input type="text" placeholder="Enter a city..." />
        </div>
        <div class="current-weather">
          <h2>Today</h2>
          <h1>Miami</h1>
          <div class="temperature">
            <span>{dataToShow}</span>
            <p>clear sky</p>
          </div>
        </div>
        <div class="future-weather">
          <div class="day-weather">
            <p>Wednesday</p>
            <div class="icon sunny"></div>
            <span>21°C</span>
          </div>
          <div class="day-weather">
            <p>Thursday</p>
            <div class="icon cloudy"></div>
            <span>24°C</span>
          </div>
          <div class="day-weather">
            <p>Friday</p>
            <div class="icon sunny"></div>
            <span>21°C</span>
          </div>
          <div class="day-weather">
            <p>Saturday</p>
            <div class="icon partly-cloudy"></div>
            <span>24°C</span>
          </div>
        </div>
      </div>
    )

}


export default Weather;