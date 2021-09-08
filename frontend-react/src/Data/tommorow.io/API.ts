import {DayInfo, HourInfo, WeatherData} from "../../Types";

function getRawData(callback: (data: any) => void): any {
    let callbackRan = false

    let dateNow = new Date(Date.now() + 2 * (10*60*60))
    let startTime: string = dateNow.toISOString()
    let dateTo = new Date(Date.now() + 5 * (1000*60*60*24) + 2 * (10*60*60))
    let endTime: string = dateTo.toISOString()
    let apikey: string = "mNtDw1HrpsLHQ9JvT5Ce54mNH0OTUqFc"
    let fields: string = "temperature,precipitationProbability,windSpeed"
    let location: string = "49.195061, 16.606836"
    let timeSteps: string = "1h,1d"
    let units: string = "metric"
    let timezone: string = "Europe/Prague"
    fetch(`https://data.climacell.co/v4/timelines?apikey=${apikey}&location=${location}&fields=${fields}&startTime=${startTime}&endTime=${endTime}&timesteps=${timeSteps}&units=${units}&timezone=${timezone}`)
        .then(res => res.json())
        .then((result) => {
            callback(result)
            callbackRan = true
        }, (error) => {
            console.log(error)
            callback(null)
            callbackRan = true
        });
    if (!callbackRan) {
        callback(null)
    }
}

export function getWeatherData(): WeatherData {
    let raw
    getRawData((data) => {raw = data})
    if (raw == null) {return {dayInfos: [], hourInfos: []}}
    let hourInfos = raw.data.timelines[0].intervals.slice(0, 48).map((interval: any) => {
        let date: Date = new Date(interval.startTime)
        let hours = date.getHours();
        let monthDay = date.getDate();
        let month = date.getMonth();
        let hourInfo: HourInfo = {
            dateTime: `${monthDay}.${month} ${hours}`,
            temperature: interval.values.temperature,
            rainProb: interval.values.precipitationProbability,
            windSpeed: interval.values.windSpeed
        }
        return hourInfo
    })
    let dayInfos = raw.data.timelines[1].intervals.map((interval: any) => {
        let date: Date = new Date(interval.startTime)
        let monthDay = date.getDate();
        let month = date.getMonth();
        let dayInfo: DayInfo = {
            date: `${monthDay}.${month}`,
            midTemp: interval.values.temperature,
            rainProb: interval.values.precipitationProbability,
            weekday: "MO" //TODO
        }
        return dayInfo
    })

}