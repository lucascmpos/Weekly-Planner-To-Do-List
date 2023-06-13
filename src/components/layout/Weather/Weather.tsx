import React, { useEffect, useState } from "react";

import axios from "axios";
import "../Weather/Weather.css";
import weatherIcon from "../../../assets/cloud.png";

interface WeatherProps {
  main?: {
    temp: number;
  }
}


const Weather: React.FC<WeatherProps> = () => {
  const [dados, setDados] = useState<WeatherProps | null>(null)

  const userCity = localStorage.getItem("city")


  const apiKey = "37b32518539a736f8d12c4ed12b59664";

  const getWeather = async (city: string) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&units=metric&appid=${apiKey}&lang=pt_br`;
     await axios
      .get(apiWeatherURL, {
        headers: { "Content-Type": "application/json;charset=utf-8" },
      })
      .then((res) => {
        setDados(res.data as WeatherProps);
      });
  };


  useEffect(() => {
    if(userCity){
    getWeather(userCity);
    }
  }, [userCity]);

  return (
    <div className="weatherDiv">
      <div className="weatherCity">
        <p id="city" className="cityWeather">
          {userCity}
        </p>
      </div>
      <div className="weatherTemp">
        <img className="weatherIcon" src={weatherIcon} alt="Nuvem" />
        <p id="temp" className="temp">
          <span>{Number(dados?.main?.temp).toFixed(0)}</span>&deg;C
        </p>
      </div>
    </div>
  );
};

export default Weather;
