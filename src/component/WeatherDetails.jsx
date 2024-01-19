import React from 'react';
import style from '../css/weatherDetails.module.css'

function WeatherDetails({pressure,Humidity,feelslike}) {
 

    return (
        <div className={style.div}>
            <div className={style.pressure}>
                <span className={style.span}>
                    Pressure
                </span>
                <span>
                    {pressure} hpa
                </span>
            </div>
            <div className={style.humidity}>
                <span className={style.span}>
                    Humidity
                </span>
                <span>
                    {Humidity}% 
                </span>
            </div>
            <div className={style.feels_like}>
                <span className={style.span}>
                Feels_like
                </span>
                <span>
                    {(feelslike-273.15).toString().slice(0,5)}
                </span>
            </div>
        </div>
    );
}

export default WeatherDetails;