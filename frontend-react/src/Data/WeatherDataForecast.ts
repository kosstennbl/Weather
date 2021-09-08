import {SourceName, WeatherData} from "../Types";
import {getWeatherData} from "./tommorow.io/API";


export async function getWetherDataBySource(source: SourceName): Promise<WeatherData> {
    switch (source) {
        case "tomorrow":
            let data = getWeatherData()
            return data
    
    }
}