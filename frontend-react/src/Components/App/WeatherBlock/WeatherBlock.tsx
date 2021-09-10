import React, {useEffect, useReducer, useState} from 'react';
import WeatherDayBlock from "./WeatherDayBlock/WeatherDayBlock";
import HourWeatherBlock from "./HourWeatherBlock/HourWeatherBlock";
import {getSourceById, sourcesReducer} from "../../../Data/Sources";
import "./WeatherBlock.css"
import {WeatherData} from "../../../Types";
import {getWeatherDataBySource} from "../../../Data/WeatherDataForecast";

type WeatherBlockProps = {
    cityName: string
}

function WeatherBlock(props: WeatherBlockProps) {
    let [sourceId, dispatchSourceId] = useReducer(sourcesReducer, 0)
    let [weatherData, setWeatherData] = useState<WeatherData>({dayInfos: [], hourInfos: []})
    useEffect(() => {
        let wData = getWeatherDataBySource(getSourceById(sourceId).name)
        setWeatherData(wData)
        console.log(wData)
    }, [sourceId])
    return (
        <div className={"WeatherBlock"}>
            <button onClick={() => dispatchSourceId({type: "previous"})} className={"ChangeSourceButton"}>
                {"<"}
            </button>
            <div className={"WeatherContainer"}>
                <p>
                    Weather for {props.cityName} from {getSourceById(sourceId).name}
                </p>
                <WeatherDayBlock cityName={props.cityName} dayInfos={weatherData.dayInfos}/>
                <HourWeatherBlock cityName={props.cityName} hourInfos={weatherData.hourInfos}/>
            </div>
            <button onClick={() => dispatchSourceId({type: "next"})} className={"ChangeSourceButton"}>
                {">"}
            </button>
        </div>
    )
}

export default WeatherBlock