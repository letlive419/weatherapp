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
        <div className="weather">
            <h1> Here is the weather = {dataToShow} F </h1>
        </div>
    )

}


export default Weather;