import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";

import {useTheme, THEME_LIGHT, THEME_DARK} from './context/ThemeProvide';
import {setWeather} from "./redux/actions/weather";

import Menu from "./components/Menu";
import MainInfo from "./components/MainInfo";

const App = () => {
    const isTheme = useTheme();
    const dispatch = useDispatch();
    const [theme, setTheme] = useState(false);
    const [city, setCity] = useState('')

    const changeTheme = () => {
        setTheme(!theme)
        isTheme.change(theme ? THEME_LIGHT : THEME_DARK);
    };

    useEffect(() => {
         navigator.geolocation.getCurrentPosition(async position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=73a76285558047f89ca3ef989ea38978`)
                .then(resp => setCity(resp.data.results[0].components.town));
        });

        (city !== '') &&
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=e51db3b527c9b976a60e63e3716a6fea`)
            .then(resp => dispatch(setWeather(resp.data)));
    }, [city]);

    return (
        <div className="container">
            <div className="top">
                <h1 className="logo">the.weather</h1>
                <input type="checkbox" id="switch" className="switch-input"/>
                <label htmlFor="switch" onClick={changeTheme} className="switch-label">
                    {isTheme.theme}
                </label>
            </div>
            <div className="main-content">
                <MainInfo/>
            </div>
            <Menu/>
        </div>
    );
};

export default App;