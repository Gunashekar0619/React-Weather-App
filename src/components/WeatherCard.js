import React from 'react';
import { useSelector } from 'react-redux';
import { Typography} from "@mui/material";

const WeatherCard = () => {
    const {success, weatherData} = useSelector((state) => {
        return {
            success: state.success,
            weatherData: state.weatherData
        }
    });

    // Handle Init Load
    if (weatherData === null) {
        return <></>
    }

    // Handle If No Data
    if (!success && weatherData === 'No Data') {
        return <div className='weather-card warning'>
            Please Enter Valid Location
        </div>;
    }
    // Handle If Data Exist
    return (
        <div className='weather-card'>
            {success && <>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                {weatherData.name}
            </Typography>
            <table>
                <tr>
                    <td>Latitude</td>
                    <td>{weatherData.coord.lat}</td>
                </tr>
                <tr>
                    <td>Longitude</td>
                    <td>{weatherData.coord.lon}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{weatherData.sys.country}</td>
                </tr>
                <tr>
                    <td>Clouds</td>
                    <td style={{ display: 'flex', alignItems: 'center' }}>
                        {weatherData.weather[0].description}
                        <img style={{ maxHeight: '40px' }}
                             src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>
                    </td>
                </tr>
                <tr>
                    <td>Wind Speed</td>
                    <td>{weatherData.wind.speed}</td>
                </tr>
                <tr>
                    <td>Temperature</td>
                    <td>{weatherData.main.temp}</td>
                </tr>
                <tr>
                    <td>Max Temperature</td>
                    <td>{weatherData.main.temp_max}</td>
                </tr>
                <tr>
                    <td>Min Temperature</td>
                    <td>{weatherData.main.temp_min}</td>
                </tr>
                <tr>
                    <td>Humidity</td>
                    <td>{weatherData.main.humidity}</td>
                </tr>
            </table></>}
        </div>
    );
};

export default WeatherCard;
