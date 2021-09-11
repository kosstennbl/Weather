import {SourceName, WeatherData} from "../Types";
import {getWeatherData as tomorrowGetData} from "./tommorow.io/API";

let tomorrowIoData: WeatherData | null = null

export function loadWeatherData(whenFinished: () => void): void {
    tomorrowGetData((data: WeatherData) => {
        tomorrowIoData = data;
        whenFinished()
    })
}

export function getWeatherDataBySource(source: SourceName): WeatherData {
    switch (source) {
        case "tomorrow.io":
            if (tomorrowIoData != null) {
                return tomorrowIoData
            }
            return {dayInfos: [], hourInfos: []}
        case "somethingRandom":
            return {dayInfos: [], hourInfos: []}
    }
}