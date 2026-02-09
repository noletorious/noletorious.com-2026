"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Tooltip } from "react-tooltip";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
    const apiKey = "d683e5243fdc8c05833d480d1ed71cf3";
    const city = "Portland"; // Replace with the desired city or location
    const state = "Oregon";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${apiKey}&units=imperial`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
        console.log(weatherData);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, []);

  if (!weatherData) {
    return <div className="text-sm opacity-50">[Loading weather...]</div>;
  }

  const { main, weather } = weatherData;

  const weatherIcons = {
    "01d": "sun.svg",
    "01n": "moon.svg",
    "02d": "partly-cloudy-day.svg",
    "02n": "partly-cloudy-night.svg",
    "03d": "cloudy.svg",
    "03n": "cloudy.svg",
    "04d": "cloudy.svg",
    "04n": "cloudy.svg",
    "09d": "rain.svg",
    "09n": "rain.svg",
    "10d": "rain.svg",
    "10n": "rain.svg",
    "11d": "thunderstorm.svg",
    "11n": "thunderstorm.svg",
    "13d": "snow.svg",
    "13n": "snow.svg",
    "50d": "mist.svg",
    "50n": "mist.svg",
  };

  return (
    <div className="flex flex-1 items-center gap-1 text-xs text-black dark:text-white">
      [<span>{weatherData.name},</span>
      <span>OR</span>
      <span>{Math.round(main.temp)}&deg;F</span>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
        alt="Weather Icon"
        width={25}
        data-tooltip-id="weather_description"
        data-tooltip-content={weather[0].description}
      />
      ]
      <Tooltip
        id="weather_description"
        type="dark"
        effect="solid"
        className="z-100"
      />
    </div>
  );
};

export default Weather;
