import {DayInfo} from "../../../../Types";
import DayWeather from "./DayWeather/DayWeather";
import "./WeatherDayBlock.css"


type WeatherDayBlockProps = {
    cityName: string
    dayInfos: DayInfo[]
}

function WeatherDayBlock(props: WeatherDayBlockProps) {

    return (
        <div className={"weatherDayBlock"}>
            {props.dayInfos
                ? <ul className={"dayForecasts"}>
                    {
                        props.dayInfos.map((dayInfo) => <DayWeather key={dayInfo.date} dayInfo={dayInfo}/>)
                    }
                </ul>
                : <p>No data from this source</p>
            }
        </div>
    )
}


export default WeatherDayBlock