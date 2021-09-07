import React, {useEffect, useState} from 'react';
import {HourInfo, WeatherSource} from "../../../../Types";
import {getHourForecasts} from "../../../../Data/HourForecasts";
import HourWeather from "./HourWeather/HourWeather";
import "./HourWeatherBlock.css"

type HourWeatherBlockProps = {
    cityName: string
    weatherSource: WeatherSource
}

function HourWeatherBlock(props: HourWeatherBlockProps) {
    let [hourForecasts, setHourForecasts] = useState<HourInfo[] | null>(null)
    useEffect(() => {setHourForecasts(getHourForecasts(props.weatherSource.name))}, [props.weatherSource.name])
    return (
        <div className={"HourWeatherBlock"}>
            <span>
                Weather for next 48 hours:
            </span>
            {hourForecasts
            ? <ul className={"hourForecasts"}>
                    {hourForecasts.map((hourInfo) => <HourWeather hourInfo={hourInfo} key={hourInfo.dateTime}/>)}
                </ul>
            : <p>No forecasts found for this source</p>}
        </div>
    )
}

export default HourWeatherBlock