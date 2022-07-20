import axios, { AxiosRequestConfig } from "axios";

export const baseURL = `https://api.openweathermap.org`;
export const geoDataUrl = "/geo/1.0/direct";
export const reverseGeoDataUrl = "/geo/1.0/reverse";
export const weatherDataUrl = "/data/2.5/weather";

export const api = axios.create({
  baseURL,
  params: {
    appid: process.env.REACT_APP_WEATHER_API_KEY,
  },
});

export const fetchGeoData = async (options: AxiosRequestConfig) =>
  await api({
    url: geoDataUrl,
    method: "get",
    ...options,
  });

export const fetchReverseGeoData = async (options: AxiosRequestConfig) =>
  await api({ url: reverseGeoDataUrl, method: "get", ...options });

export const fetchWeather = async (options: AxiosRequestConfig) =>
  await api({ url: weatherDataUrl, method: "get", ...options });
