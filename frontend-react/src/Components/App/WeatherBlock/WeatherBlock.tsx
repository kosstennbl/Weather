import React, {useEffect, useReducer, useState} from 'react';
import WeatherDayBlock from "./WeatherDayBlock/WeatherDayBlock";
import HourWeatherBlock from "./HourWeatherBlock/HourWeatherBlock";
import {getSourceById, sourcesReducer} from "../../../Data/Sources";
import "./WeatherBlock.css"
import {WeatherData} from "../../../Types";

type WeatherBlockProps = {
    cityName: string
}

function WeatherBlock(props: WeatherBlockProps) {
    let [sourceId, dispatchSourceId] = useReducer(sourcesReducer, 0)
    let [weatherData, setWeatherData] = useState<WeatherData>({dayInfos: [], hourInfos: []})
    let source = getSourceById(sourceId)
    useEffect(() => {
        setWeatherData()
    })
    return (
        <div className={"WeatherBlock"}>
            <button onClick={() => dispatchSourceId({type: "previous"})} className={"ChangeSourceButton"}>
                {"<"}
            </button>
            <div className={"WeatherContainer"}>
                <WeatherDayBlock cityName={props.cityName} weatherSource={source}/>
                <HourWeatherBlock cityName={props.cityName} weatherSource={source}/>
            </div>
            <button onClick={() => dispatchSourceId({type: "next"})} className={"ChangeSourceButton"}>
                {">"}
            </button>
        </div>
    )
}

export default WeatherBlock