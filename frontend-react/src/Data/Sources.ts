import {SourceAction, WeatherSource} from "../Types";

const sources: WeatherSource[] = [
    {name: "tomorrow",
     address: "weather.com/..."},
    {name: "somethingRandom",
     address: "abracadabra/"}]

export function getSourceById(sourceId: number): WeatherSource {
    return sources[sourceId];
}


export function sourcesReducer(state: number, action: SourceAction) {
    function mod(n: number, m: number) {
        return ((n % m) + m) % m;
    }
    switch (action.type) {
        case "next": return mod((state + 1), sources.length);
        case "previous": return mod((state - 1), sources.length);
    }
}