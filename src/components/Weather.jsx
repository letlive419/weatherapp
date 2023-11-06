import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Weather() {
    const api = process.env.REACT_APP_API_KEY;
    const [dataToShow, setDataToShow] = useState(null);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState(null);
    const [exposure, setExposure] = useState(null)

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
    },[location,api]);
       
    function handleChange(event)  {
      setLocation(event.target.value)
    }

      if (dataToShow === null && error === null) {
        return <div>Loading...</div>;
      }
    
      // Display error message if request failed
      if (error) {
        return <div>Error fetching data.</div>;
      }
    

    return(
        <div className="weather-widget">
        <div className="search-box">
          <input type="text" value={location} onChange={handleChange} placeholder="Enter a city..." />
        </div>
        <div className="current-weather">
          <h2>Today</h2>
          <h1>Miami</h1>
          <div className="temperature">
            <span>{dataToShow}</span>
            <p>clear sky</p>
          </div>
        </div>
        <div className="future-weather">
          <div className="day-weather">
            <p>Wednesday</p>
            <div className="icon sunny"></div>
            <span>21°C</span>
          </div>
          <div className="day-weather">
            <p>Thursday</p>
            <div className="icon cloudy"></div>
            <span>24°C</span>
          </div>
          <div className="day-weather">
            <p>Friday</p>
            <div className="icon sunny"></div>
            <span>21°C</span>
          </div>
          <div className="day-weather">
            <p>Saturday</p>
            <div className="icon partly-cloudy"></div>
            <span>24°C</span>
          </div>
        </div>
      </div>
    )

}


export default Weather;