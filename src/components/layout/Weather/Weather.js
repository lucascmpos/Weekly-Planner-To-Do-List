import React, { useEffect, useState } from "react";

import axios from "axios";
import "../Weather/Weather.css";
import weatherIcon from "../../../assets/cloud.png"

const Weather = () => {
  const [dados, setDados] = useState({});

  const apiKey = "37b32518539a736f8d12c4ed12b59664";

  const dataUser = localStorage.getItem("userData");
  const userDados = JSON.parse(dataUser);

  const getWeather = async (city) => {
    console.log(city);
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&units=metric&appid=${apiKey}&lang=pt_br`;
    const res = await axios
      .get(apiWeatherURL, {
        headers: { "Content-Type": "application/json;charset=utf-8" },
      })
      .then((res) => {
        setDados(res.data);
        console.log(res.data.main.temp);
      });
  };

  useEffect(() => {
    getWeather(userDados.city1);
  }, []);

  return (
    <div className="weatherDiv">
      <div className="weatherCity">
        <p id="city" className="cityWeather">
          {userDados.city1}
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
