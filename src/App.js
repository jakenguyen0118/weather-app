import React, {useState} from 'react'
import './App.css'
import Form from './Components/Form'
import Weather from './Components/Weather'

function App() {

  // setting state for the weather
  const [weather, setWeather] = useState({})

  // handle submit for zip code (location) of the weather
  const handleSubmit = (zipCode) => {

    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=c383603aca96277e554bcdd4ddf9a5fd`)
			.then((response) => response.json())
			.then((data) => {
				// logging data to see if zip code inputted is correct data shown
				console.log('this is data -', data)
				setWeather(data)
			})
  }

  return (
		<div className='App'>
			<h1 className='title'>What's the weather today?</h1>
			<div className='location-form'>
				<Form handleSubmit={handleSubmit} />
			</div>
			{weather.main ? <Weather weather={weather} /> : null}
		</div>
	)
}

export default App