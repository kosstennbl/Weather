import React from 'react';

type HourWeatherBlockProps = {
    cityName: string
}

function HourWeatherBlock(props: HourWeatherBlockProps) {
    return (
        <div>
            <p>
                Weather for next 48 hours:
            </p>
        </div>
    )
}

export default HourWeatherBlock