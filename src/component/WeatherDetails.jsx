import React from 'react';
import style from '../css/weatherDetails.module.css'

function WeatherDetails({pressure,Humidity,feelslike}) {
 console.log(pressure);

    return (
        <div className={style.div}>
            <div className={style.pressure}>
                <span className={style.span}>
                    Pressure
                </span>
                <span>
                    {pressure && pressure[0]} hpa
                </span>
            </div>
            <div className={style.humidity}>
                <span className={style.span}>
                    Humidity
                </span>
                <span>
                    {Humidity && Humidity[0]}% 
                </span>
            </div>
            <div className={style.feels_like}>
                <span className={style.span}>
                Feels_like
                </span>
                <span>
                    {feelslike && (feelslike[0]-273.15).toString().slice(0,5)}
                </span>
            </div>
        </div>
    );
}

export default React.memo(WeatherDetails);