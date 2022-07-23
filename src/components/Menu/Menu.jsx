import React, {useEffect, useState} from 'react';
import axios from "axios";

import {setWeather} from "../../redux/actions/weather";
import {setDegreeCelsius, setDegreeFahrenheit} from "../../redux/actions/degree";
import {useDispatch, useSelector} from "react-redux";

import MenuLoading from "./MenuLoading";
import ListItem from "../ListItem";

import style from './Menu.module.scss';

const Menu = () => {
    const dispatch = useDispatch();
    const [location, setLocation] = useState('');

    const degree = useSelector(({ degree }) => degree.degree);
    const weather = useSelector(({ weather }) => weather.weather);

    const searchWeather = e => {
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=e51db3b527c9b976a60e63e3716a6fea`)
            .then(resp => dispatch(setWeather(resp.data)));
        setLocation('');
        dispatch(setWeather(false))
    };

    const fahrenheitToCelsius = fahrenheit => Math.round((fahrenheit - 32) * 5/9);

    const degToCompass = num => {
        let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(Math.floor((num / 22.5) + 0.5) % 16)];
    };

    const changeDegree = () => degree ? dispatch(setDegreeCelsius()) : dispatch(setDegreeFahrenheit());

    const convertTime = seconds => new Date(seconds * 1000).toLocaleTimeString();

    return (
        <div className={style.menu}>
            <form className={style.form}>
                <input
                    type="text"
                    value={location}
                    className={style.input}
                    placeholder="Enter Location"
                    onChange={e => setLocation(e.target.value)}
                />
                <button
                    type="submit"
                    onClick={searchWeather}
                    className={style.button}
                />
            </form>

            {Object.keys(weather).length > 0
                ? (
                    <>
                        <div className={style.items}>

                            <div className="list-item">
                                <div className="list-item__top">
                                    <h2 className="list-item__title">Main</h2>
                                    <button onClick={changeDegree}>
                                        <span className={`${degree ? 'active' : ''}`}>F</span>\
                                        <span className={`${degree ? '' : 'active'}`}>C</span>
                                    </button>
                                </div>
                                <ul className="list-wrapper">
                                    <ListItem
                                        title="Temperature"
                                        value={degree ? Math.round(weather.main.temp) : fahrenheitToCelsius(weather.main.temp)} sign={`° ${degree ? 'F' : 'C'}`}/>
                                    <ListItem
                                        title="Feels like"
                                        value={degree ? Math.round(weather.main.feels_like) : fahrenheitToCelsius(weather.main.feels_like)} sign={`° ${degree ? 'F' : 'C'}`}/>
                                    <ListItem
                                        title="Temperature min"
                                        value={degree ? Math.round(weather.main.feels_like) : fahrenheitToCelsius(weather.main.temp_min)} sign={`° ${degree ? 'F' : 'C'}`}/>
                                    <ListItem
                                        title="Temperature max"
                                        value={degree ? Math.round(weather.main.temp_max) : fahrenheitToCelsius(weather.main.temp_max)} sign={`° ${degree ? 'F' : 'C'}`}/>
                                    <ListItem title="Humidity" value={weather.main.humidity} sign="%"/>
                                    <ListItem title="Pressure" value={weather.main.pressure} sign="hPa"/>
                                </ul>
                            </div>

                            <div className="list-item">
                                <h2 className="list-item__title">Clouds</h2>
                                <ul className="list-wrapper">
                                    <ListItem title="Clouds" value={weather.clouds.all} sign="%"/>
                                </ul>
                            </div>

                            <div className="list-item">
                                <h2 className="list-item__title">Wind</h2>
                                <ul className="list-wrapper">
                                    <ListItem title="Speed" value={weather.wind.speed} sign="km\h"/>
                                    <ListItem
                                        title="Direction \ degrees"
                                        value={`${degToCompass(weather.wind.deg)} | ${weather.wind.deg}`} sign="°"
                                    />
                                    <ListItem title="Wind gust" value={weather.wind.gust} sign="km\h"/>
                                </ul>
                            </div>

                            <div className="list-item">
                                <h2 className="list-item__title">Sunrise \ Sunset</h2>
                                <ul className="list-wrapper">
                                    <ListItem title="Sunrise" value={convertTime(weather.sys.sunrise)} sign=""/>
                                    <ListItem title="Sunset" value={convertTime(weather.sys.sunset)} sign=""/>
                                </ul>
                            </div>

                        </div>
                    </>
                )
                : <MenuLoading/>
            }

        </div>
    );
};

export default Menu;