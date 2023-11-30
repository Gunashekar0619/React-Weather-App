const initialState = {
    success: false,
    weatherData: null,
    error: null,
};


const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_WEATHER_SUCCESS':
            return { ...state, success: true, weatherData: action.payload, error: null };
        case 'FETCH_WEATHER_ERROR':
            return { ...state, success: false, weatherData: 'No Data', error: 'Failed to Fetch the Data' };
        default:
            return state;
    }
};

export default weatherReducer;
