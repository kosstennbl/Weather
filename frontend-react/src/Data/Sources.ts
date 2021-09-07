import {WeatherSource} from "../Types";

const sources: WeatherSource[] = [
    {name: "weather.com",
     address: "weather.com/..."},
    {name: "somethingRandom",
     address: "abracadabra/"}]

export function getSourceById(sourceId: number): WeatherSource {
    return sources[sourceId];
}
