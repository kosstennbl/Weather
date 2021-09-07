import React from 'react';
import {HourInfo} from "../../../../../Types";
import "./HourWeather.css"

type HourWeatherProps = {
    hourInfo: HourInfo
}

function HourWeather(props: HourWeatherProps) {
    return (
        <li>
            <div className={"HourWeather"}>
                <label className={"HourWeatherPart"}>{props.hourInfo.dateTime}</label>
                <label className={"HourWeatherPart"}>{props.hourInfo.temperature + "°C"}</label>
                <label className={"HourWeatherPart"}>{props.hourInfo.rainProb + "% rain"}</label>
                <label className={"HourWeatherPart"}>{props.hourInfo.windSpeed + "m\\s wind"}</label>
            </div>
        </li>
    )
}

export default HourWeather