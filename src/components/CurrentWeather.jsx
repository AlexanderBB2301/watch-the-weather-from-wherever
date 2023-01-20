import React from "react";

const CurrentWeather = ({ weather }) => {
  return (
    <div>
      <p>{weather.name}</p>
    </div>
  );
};

export default CurrentWeather;
