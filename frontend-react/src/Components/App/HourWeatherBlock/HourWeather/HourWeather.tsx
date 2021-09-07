import React from 'react';

type HourWeatherProps = {
    cityName: string
}

function HourWeather(props: HourWeatherProps) {
    return (
        <label>
            {props.cityName}
        </label>

    )
}

export default HourWeather