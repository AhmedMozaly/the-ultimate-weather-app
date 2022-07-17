import axios, { AxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: `http://api.openweathermap.org`,
  params: {
    appid: process.env.REACT_APP_WEATHER_API_KEY,
  },
});

export const fetchGeoData = async (options: AxiosRequestConfig) =>
  await api({
    url: "/geo/1.0/direct",
    method: "get",
    ...options,
  });

export const fetchReverseGeoData = async (options: AxiosRequestConfig) =>
  await api({ url: "/geo/1.0/reverse", method: "get", ...options });

export const fetchWeather = async (options: AxiosRequestConfig) =>
  await api({ url: "data/2.5/weather", method: "get", ...options });
