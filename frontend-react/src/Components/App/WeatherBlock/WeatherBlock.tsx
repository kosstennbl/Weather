import React from 'react';
import {WeatherBlockProps} from "../../../Types";



function WeatherBlock(props: WeatherBlockProps) {
    return (
        <label>
            {props.cityName}
        </label>

    )
}

export default WeatherBlock