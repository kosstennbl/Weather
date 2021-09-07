import {DayInfo, SourceName} from "../Types";

export function getDayForecasts(source: SourceName): DayInfo[]| null {
    switch (source) {
        case "weather.com":
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
        case "somethingRandom":
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