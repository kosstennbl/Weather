import React, {useEffect, useState} from 'react';
import {DayInfo, WeatherSource} from "../../../Types";
import {getDayForecasts} from "../../../Data/DayForecasts";
import DayWeather from "./DayWeather/DayWeather";
import "./WeatherDayBlock.css"
import {getSourceById} from "../../../Data/Sources";

type WeatherDayBlockProps = {
    cityName: string
}

function WeatherDayBlock(props: WeatherDayBlockProps) {

    let [sourceId, setSourceId] = useState<number>(0)
    let [dayForecasts, setDayForecasts] = useState<DayInfo[] | null>(null)
    useEffect(() => {setDayForecasts(getDayForecasts(sourceId))}, [sourceId])
    return (
        <div className={"weatherDayBlock"}>
            <label>
                Weather for {props.cityName} from {getSourceById(sourceId).name}
            </label>
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