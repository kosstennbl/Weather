export type DayInfo = {
    date: string
    weekday: string
    midTemp: number
    rainProb: number
}

export type HourInfo = {
    dateTime: string
    temperature: number
    rainProb: number
    windSpeed: number
}

export type WeatherData = {
    dayInfos: DayInfo[]
    hourInfos: HourInfo[]
}

export type WeatherSource = {
    name: SourceName
    address: string
}

export type SourceName = "tomorrow" | "somethingRandom"

export type SourceAction = {
    type: SourceActionType
}

export type SourceActionType = "next" | "previous"
