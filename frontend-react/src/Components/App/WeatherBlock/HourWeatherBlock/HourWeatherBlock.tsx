import {HourInfo} from "../../../../Types";

import HourWeather from "./HourWeather/HourWeather";
import "./HourWeatherBlock.css"

type HourWeatherBlockProps = {
    cityName: string
    hourInfos: HourInfo[]
}

function HourWeatherBlock(props: HourWeatherBlockProps) {
    return (
        <div className={"HourWeatherBlock"}>
            <span>
                Weather for next 48 hours:
            </span>
            {props.hourInfos
            ? <ul className={"hourForecasts"}>
                    {props.hourInfos.map((hourInfo) => <HourWeather hourInfo={hourInfo} key={hourInfo.dateTime}/>)}
                </ul>
            : <p>No forecasts found for this source</p>}
        </div>
    )
}

export default HourWeatherBlock