import axios from "axios";
const baseUrl = "http://api.weatherapi.com/v1/";
const api = "YOUR API";

export const getWeekWeather = async (location: string) => {
  return axios
    .get(`${baseUrl}forecast.json?key=${api}&q=${location}&days=7`)
    .then((response) => response.data);
};

export const getAutocomleteLocation = async (query: string) => {
  return axios.get(`${baseUrl}search.json?key=${api}&q=${query}`).then((response) => response.data);
}