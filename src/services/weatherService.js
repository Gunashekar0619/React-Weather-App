import axios from "axios";

export const getWeatherDetails = (location) => {
    const _url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=62908047dc0cdba22f4915a3a79658fa`
    return axios.get(_url);
}