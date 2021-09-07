import {DayInfo, WeatherSource} from "../Types";

export function getDayForecasts(sourceId: number): DayInfo[]|null {
    switch (sourceId) {
        case 0:
            return [{
                date: "07.09",
                weekday: "tuesday",
                midTemp: 22,
                rainProb: 5
            }, {
                date: "08.09",
                weekday: "wednesday",
                midTemp: 23,
                rainProb: 17
            }]
        case 1:
            return [{
                date: "07.09",
                weekday: "tuesday",
                midTemp: 21,
                rainProb: 10
            }, {
                date: "08.09",
                weekday: "wednesday",
                midTemp: 22,
                rainProb: 40
            }]
        default:
            return null
    }

}