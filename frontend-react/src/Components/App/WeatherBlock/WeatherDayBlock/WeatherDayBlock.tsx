import React, {useEffect, useState} from 'react';
import {DayInfo, WeatherSource} from "../../../../Types";
import {getDayForecasts} from "../../../../Data/DayForecasts";
import DayWeather from "./DayWeather/DayWeather";
import "./WeatherDayBlock.css"


type WeatherDayBlockProps = {
    cityName: string
    weatherSource: WeatherSource
}

function WeatherDayBlock(props: WeatherDayBlockProps) {

    let [dayForecasts, setDayForecasts] = useState<DayInfo[] | null>(null)
    useEffect(() => {setDayForecasts(getDayForecasts(props.weatherSource.name))}, [props.weatherSource.name])
    return (
        <div className={"weatherDayBlock"}>
            <p>
                Weather for {props.cityName} from {props.weatherSource.name}
            </p>
            {dayForecasts
                ? <ul className={"dayForecasts"}>
                    {
                        dayForecasts.map((dayInfo) => <DayWeather key={dayInfo.date} dayInfo={dayInfo}/>)
                    }
                </ul>
                : <p>No data from this source</p>
            }
        </div>
    )
}


export default WeatherDayBlock