import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {fetchWeatherError, fetchWeatherSuccess} from '../redux-store/weatherActions';
import { getWeatherDetails } from '../services/weatherService'
const SearchBar = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = () => {
        getWeatherDetails(query).then(data => {
            dispatch(fetchWeatherSuccess(data.data));
        }).catch(err => {
            dispatch(fetchWeatherError());
        });
    };

    return (
        <div className='searchContainer'>
            <input
                type="text"
                placeholder="Please Enter City Name..."
                value={query}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Search</button>
        </div>
    );
};

export default SearchBar;
