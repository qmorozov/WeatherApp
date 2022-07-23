import React from 'react';

import {useSelector} from "react-redux";
import MainInfoLoading from "./MainInfoLoading";

import style from './MainInfo.module.scss';

const MainInfo = () => {
    const degree = useSelector(({ degree }) => degree.degree);
    const weather = useSelector(({ weather }) => weather.weather);

    const date = () => {
        let date = new Date();
        let dayName = date.toLocaleString('en-US', {weekday: 'long'});
        let monthName = date.toLocaleString('en-US', {month: 'long'});

        return `${dayName}, ${date.getDate()} ${monthName}, ${date.getFullYear()}`
    };

    const fahrenheitToCelsius = fahrenheit => Math.round((fahrenheit - 32) * 5/9);

    return (
        <div className={style.wrapper}>
            {weather.weather
                ? (
                    <>
                        <h2 className={style.degree}>
                            {degree ? Math.round(weather.main.temp) : fahrenheitToCelsius(weather.main.temp)}°
                        </h2>
                        <div className={style.info}>
                            {weather.name ? <h2 className={style.city}>{weather.name}</h2> : null}
                            <p className={style.date}>{date()}.</p>
                            <p className={style.country}>{weather.sys.country}</p>
                        </div>
                        <div className={style.sky}>
                            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.name}/>
                            <p>{weather.weather[0].description}</p>
                        </div>
                    </>
                )
                : <MainInfoLoading/>
            }
        </div>
    );
};

export default MainInfo;