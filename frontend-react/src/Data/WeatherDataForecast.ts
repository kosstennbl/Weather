import {SourceName, WeatherData} from "../Types";
import {getWeatherData as tomorrowGetData} from "./tommorow.io/API";

const tomorrowIoData: WeatherData = tomorrowGetData()

export function getWeatherDataBySource(source: SourceName): WeatherData {
    switch (source) {
        case "tomorrow":
            return tomorrowIoData
        case "somethingRandom":
            return {dayInfos: [], hourInfos: []}
    }
}