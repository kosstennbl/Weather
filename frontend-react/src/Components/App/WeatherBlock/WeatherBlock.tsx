import React from 'react';
import WeatherDayBlock from "../WeatherDayBlock/WeatherDayBlock";
import HourWeatherBlock from "../HourWeatherBlock/HourWeatherBlock";

type WeatherBlockProps = {
    cityName: string
}

function WeatherBlock(props: WeatherBlockProps) {
    return (
        <div className={"WeatherBlock"}>
            <button/>
            <div>
                <WeatherDayBlock cityName={"Brno"}/>
                <HourWeatherBlock cityName={"Brno"}/>
            </div>
            <button/>
        </div>
    )
}

export default WeatherBlock