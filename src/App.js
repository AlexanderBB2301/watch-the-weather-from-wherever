//display icon https://openweathermap.org/img/wn/${icon}.png
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getWeatherData } from "./redux/slices/weatherSlice";
import CityOptions from "./components/CityOptions";
import CurrentWeather from "./components/CurrentWeather";
// import CurrentWeatherDisplay from "./components/CurrentWeatherDisplay";
function App() {
  //   const [weatherInfo, setWeatherInfo] = useState("");
  const dispatch = useDispatch();

  // const handleResponse = (weather) => {
  //   setWeatherInfo({
  //     city: weather.weather.name,
  //     icon: weather.weather.weather[0].icon,
  //   });
  // };

  const [city, setCity] = useState("");
  const [weatherI, setWeatherI] = useState("");
  //dispatch an actionwhen component mounts
  useEffect(() => {
    dispatch(getWeatherData("London"));
  }, []);

  //select state from store
  //useSelector takes a function as a callback
  //first argument is state, which contains all states in store
  const state = useSelector((state) => state);

  const { weather, loading, error } = state;
  console.log(state);

  const handleCityInput = (e) => setCity(e.target.value);

  const sendSearch = () => {
    dispatch(getWeatherData(city));
    setCity("");
  };

  return (
    <div>
      <div className="inputForm">
        <CityOptions />
        <input
          placeholder="Enter City Name"
          value={city}
          onChange={handleCityInput}
          class="relative z-10 inline-block w-full md:w-auto mb-2  px-3 py-2 mr-4  font-medium leading-normal bg-transparent border-2 rounded-lg text-green-400 "
        ></input>
        {/* Button */}
        <button
          onClick={() => sendSearch()}
          type="button"
          className="inline-flex items-center px-3 pr-3 28 text-center py-3 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Search
        </button>
        <div>
          <p>TESTING </p>
          <CurrentWeather weather={weather} />
        </div>
      </div>
      <div className="currentWeatherTopCard">
        {/* <CurrentWeather weatherInfo={weatherInfo} /> */}
        <div className="locationDate">
          {/* <p>{weather.name}</p> */}
          {/* <p>
            {weather.weather.name} {weather.weather.sys.country}
          </p> */}
        </div>
        <div className="date">{/* <p>{weather.weather.dt}</p> */}</div>
        <div className="iconAndDescription">
          {/* <img
            src={`https://openweathermap.org/img/wn/${weather.weather.weather[0].icon}@2x.png`}
            alt="Weather Icon"
          /> */}
          {/* <p>
            {weather.weather.weather[0].main}
            {weather.weather.weather[0].description}
          </p> */}
        </div>
        <div className="temp">
          {/* <p>{Math.round(weather.weather.main.temp)}</p> */}
        </div>
      </div>

      <div className="extraWeatherInfoDisplay">
        <div className="feelsLike">
          {/* <p>{Math.round(weather.weather.main.feels_like)}</p> */}
        </div>
        <div className="humidity">
          {/* <p>{weather.weather.main.humidity} %</p> */}
        </div>
        <div className="windSpeed">
          {/* <p>{Math.round(weather.weather.wind.speed)} m/s</p> */}
        </div>
        <div className="sunriseSunset">
          {/* <p>{weather.weather.sys.sunrise}</p>
          <p>{weather.weather.sys.sunset}</p> */}
        </div>
      </div>
    </div>
  );
}

export default App;
