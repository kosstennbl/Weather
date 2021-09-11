import {DayInfo, HourInfo, WeatherData} from "../../Types";





function getRawData(callback: (raw: any) => void): void {
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
        .then((res) => {
            return res.json()
        })
        .then((result) => {
            callback(result)
        }, (error) => {
            console.log(error)
            callback(null)
        });
}

export function getWeatherData(callback: (data: WeatherData) => void): void {
    getRawData((raw: any) => {
        if (raw == null) {
            return {dayInfos: [], hourInfos: []}
        }
        let hourInfos = raw.data.timelines[0].intervals.slice(0, 48).map((interval: any) => {
            let date: Date = new Date(interval.startTime)
            let hours = date.getHours();
            let monthDay = date.getDate();
            let month = date.getMonth();
            let hourInfo: HourInfo = {
                dateTime: `${correctDate(monthDay)}.${correctDate(month + 1)} ${correctDate(hours)}:00`,
                temperature: Math.round(interval.values.temperature),
                rainProb: interval.values.precipitationProbability,
                windSpeed: interval.values.windSpeed
            }
            return hourInfo
        })
        let dayInfos = raw.data.timelines[1].intervals.map((interval: any) => {
            let date: Date = new Date(interval.startTime)
            let monthDay = date.getDate();
            let month = date.getMonth();
            let weekday = date.getDay();

            let dayInfo: DayInfo = {
                date: `${correctDate(monthDay)}.${correctDate(month + 1)}`,
                midTemp: Math.round(interval.values.temperature),
                rainProb: interval.values.precipitationProbability,
                weekday: getDayOfWeekName(weekday)
            }
            return dayInfo
        })
        let weatherData: WeatherData = {
            hourInfos: hourInfos,
            dayInfos: dayInfos
        }
        callback(weatherData)
    })



}

function correctDate(number: number): string {
    return `${number < 10 ? "0" : "" }${number}`
}

function getDayOfWeekName(day: number): string {
    switch(day) {
        case 0: return "Sun"
        case 1: return "Mon"
        case 2: return "Tue"
        case 3: return "Wed"
        case 4: return "Thu"
        case 5: return "Fri"
        case 6: return "Sat"
        default: return "ERR"
    }
}