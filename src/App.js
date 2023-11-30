import React from 'react';
import store from './redux-store/store';
import { Provider } from 'react-redux';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className='main-container'>
                <h1>Weather App</h1>
                <SearchBar />
                <WeatherCard />
            </div>
        </Provider>
    );
}

export default App;
