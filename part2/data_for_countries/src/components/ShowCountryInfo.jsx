import { useEffect, useState } from "react";
import serviceWeather from "../services/Weather";

const ShowCountryInfo = ({ country }) => {
  const [lat, lng] = country.capitalInfo.latlng;
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    serviceWeather
      .getWeatherByCapital(lat, lng)
      .then((data) => setWeather(data));
  }, []);
  const temperatureByCelisus = (temp) => {
    return (((temp - 32) * 5) % 9).toFixed(2);
  };
  if (weather === null) {
    return <h2> weather is Loading ....</h2>;
  }
  return (
    <div>
      <h1>{country.name.common}</h1>
      <h4>Capital {country.capital[0]}</h4>
      <h4>Area {country.area}</h4>
      <h2>Languages</h2>
      <ul>
        {Object.values(country.languages).map((value) => (
          <li>{value}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
      <h2>Weather {weather.name} </h2>
      <h3>
        Temperature {temperatureByCelisus(Number(weather.main.temp))} Celsius
      </h3>
      <img
        src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`}
      />
      <h4>Wind {weather.wind.speed} m/s</h4>
    </div>
  );
};

export default ShowCountryInfo;
