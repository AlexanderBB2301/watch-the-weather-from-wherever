import React from "react";
import { getWeatherData } from "../redux/slices/weatherSlice";
import { useDispatch } from "react-redux";

const CityOptions = () => {
  const dispatch = useDispatch();

  const cities = [
    {
      id: 0,
      cityName: "London",
    },
    {
      id: 1,
      cityName: "Paris",
    },
    {
      id: 2,
      cityName: "Berlin",
    },
    {
      id: 3,
      cityName: "Stockholm",
    },
    {
      id: 4,
      cityName: "Oslo",
    },
  ];

  // const sendSearch = (city) => {
  //   dispatch(getWeatherData(city));
  // };

  return (
    <div>
      {cities.map((city) => (
        <button
          className="cityOptionBtn"
          type="button"
          key={city.id}
          value={city}
          onClick={() => dispatch(getWeatherData(city.cityName))}
        >
          {city.cityName}
        </button>
      ))}
    </div>
  );
};

export default CityOptions;
