export const fetchWeatherSuccess = (data) => ({
    type: 'FETCH_WEATHER_SUCCESS',
    payload: data,
});

export const fetchWeatherError = () => ({
    type: 'FETCH_WEATHER_ERROR',
    payload: null,
});

