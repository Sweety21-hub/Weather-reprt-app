import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5/weather";
const api_key = "2f0498f386c0819175e1098235678af5";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(url, {
    params: {
      q: query,
      units: "metric",
      APPID: api_key
    }
  });
  return data;
};
