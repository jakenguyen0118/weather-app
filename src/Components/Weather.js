import React from 'react'

const Weather = props => {
    
    return (
        <div>
            <h2>{props.forecast.name}</h2>
             <p className='temperature'>Current Temperature: F</p>
             <p>Weather Description: </p>
             <p>
                Min-Temp: F <br />
                Max-Temp: F
             </p>
        </div>
    )
}

export default Weather