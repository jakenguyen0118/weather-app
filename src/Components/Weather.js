import React from 'react'

const Weather = props => {
    // console.log('props.weather.main -', props.weather.main.temp)
    let temp = Math.floor(props.weather.main.temp)
    // console.log('this is temp', temp)
    let tempMin = Math.floor(props.weather.main.temp_min)
    let tempMax = Math.floor(props.weather.main.temp_max)

    
    
    return (
        <div>
            <h2>{props.weather.name}</h2>
            <p className='temperature'>Current Temperature: {temp}F</p>
            <p>Weather Description: {props.weather.weather[0].description}</p>
            <p>
                Min-Temp: {tempMin}F <br />
                Max-Temp: {tempMax}F
            </p>
        </div>
    )
}

export default Weather