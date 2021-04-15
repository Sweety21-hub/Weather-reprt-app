import React, { useState } from "react";
import { fetchWeather } from "./weathernote";
import "../public/style.css";
import "../public/fonts.css";

const today = new Date();
const day = today.toDateString();
console.log(day);
const time = today.toLocaleTimeString();
console.log(time);
// console.log(today);

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [checked, setChecked] = useState(true);

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);

      setWeather(data);
      setQuery("");
      console.log(weather);
      // handleChange();
    }
  };
  // const handleChange = () => {
  //   setChecked((prev) => !prev);
  // };
  // // console.log(weather.weather[0].icon);
  const icon = 4n;

  return (
    <div className="container">
      <p className="day">
        {" "}
        Welcome, it's {day} {time}
      </p>

      <input
        className="city"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />

      {weather.main && (
        <div className="description">
          <h1>{weather.name}</h1>
          <h2>{weather.main.temp}&deg;c</h2>
          <h3>{weather.weather[0].description}</h3>
          <span className="temp">{weather.main.temp_min}&deg;c/</span>
          <span className="temp">{weather.main.temp_max}&deg;c</span>
          <h3>Humidity: {weather.main.humidity}%</h3>

          {/* <p>{weather.weather[0].icon}</p> */}

          <img
            src={"https://openweathermap.org/img/wn/" + { icon } + "@2x.png"}
          />
        </div>
      )}
    </div>
  );
};

export default App;
