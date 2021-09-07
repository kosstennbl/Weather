import {HourInfo, SourceName} from "../Types";

export function getHourForecasts(source: SourceName): HourInfo[]| null {
    switch (source) {
        case "weather.com": return [
            {dateTime: "18:00",
             temperature: 20,
             rainProb: 3,
             windSpeed: 0.5},
            {dateTime: "19:00",
                temperature: 19,
                rainProb: 3,
                windSpeed: 0.5},
            {dateTime: "20:00",
                temperature: 18,
                rainProb: 3,
                windSpeed: 0.5},
            {dateTime: "21:00",
                temperature: 17,
                rainProb: 3,
                windSpeed: 1}
        ];
        case "somethingRandom": return [
            {dateTime: "18:00",
                temperature: 20,
                rainProb: 7,
                windSpeed: 0.5},
            {dateTime: "19:00",
                temperature: 19,
                rainProb: 7,
                windSpeed: 0.5},
            {dateTime: "20:00",
                temperature: 18,
                rainProb: 7,
                windSpeed: 0.5},
            {dateTime: "21:00",
                temperature: 17,
                rainProb: 10,
                windSpeed: 1}
        ]
    }
}