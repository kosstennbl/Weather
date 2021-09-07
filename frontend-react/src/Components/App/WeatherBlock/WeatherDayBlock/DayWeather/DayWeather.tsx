import React from 'react';
import {DayInfo} from "../../../../../Types";
import "./DayWeather.css"

type DayWeatherProps = {
    dayInfo: DayInfo
}

function DayWeather(props: DayWeatherProps) {
    return (
        <li className={"dayWeather"}>
            <p>
                {props.dayInfo.date}
            </p>
            <p>
                {props.dayInfo.weekday}
            </p>
            <p>
                {props.dayInfo.midTemp + "°C"}
            </p>
            <p>
                {props.dayInfo.rainProb + "% rain prob."}
            </p>
        </li>


    )
}

export default DayWeather;