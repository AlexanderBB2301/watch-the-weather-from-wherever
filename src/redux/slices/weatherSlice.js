//actions and reducers

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useState } from "react";

export const getWeatherData = createAsyncThunk(
  //action type
  "weather/get",
  //action
  async (payload, { getState, dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=3578dfed94786251f140917604cd3f75&units=metric`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error && error.response && error.response.data);
    }
  }
);

// const formatWeatherData = (data) => {
//   const {
//    main: { temp, feels_like, humidity },
//     name,
//     dt,
//   } = data;

//   const { main: details, icon } = weather[0];

//   return {
//     temp,
//     feels_like,
//     humidity,
//     name,
//     dt,
//     details,
//     icon,
//   };
// };

// export const getFormattedWeatherData = async () => {
//   const formattedWeatherData = await getWeatherData("weather").then(
//     formatWeatherData()
//   );
//   return { ...formattedWeatherData };
// };

// export const getForecastData = createAsyncThunk(
//   "forecast/get",
//   async (payload, { getState, dispatch, rejectWithValue }) => {
//     try {
//       const { data } = await axios.get(
//         `http://api.openweathermap.org/data/2.5/forecast?q=${payload}appid3578dfed94786251f140917604cd3f75&units=metric`
//       );
//       return data;
//     } catch (error) {
//       return rejectWithValue(error && error.response && error.response.data);
//     }
//   }
// );

//slices

const weatherSlice = createSlice({
  name: "weather",
  initialState: {},
  //handle actions in reducer
  extraReducers: (builder) => {
    builder.addCase(getWeatherData.pending, (state, action) => {
      //logic
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getWeatherData.fulfilled, (state, action) => {
      //logic
      state.weather = action && action.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(getWeatherData, (state, action) => {
      state.loading = false;
      state.weather = undefined;
      state.error = action && action.payload;
    });
  },
});

export default weatherSlice.reducer;
