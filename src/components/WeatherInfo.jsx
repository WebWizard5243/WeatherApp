import React from 'react'
import Info from './info'

 function WeatherInfo(props) {
  return (
    <div className='weather-info'>
      <Info 
      img = "/temperature-three-quarters-solid (1).svg"
      text = "feels like"
      value = {Math.floor(props.feelsLike) + "°C"}/>
      <Info 
      img = "/wind-solid.svg"
      text = "Wind" 
      value = {props.wind.toFixed(1)+ " km/hr"}/>
      <Info 
      img = "/droplet-solid.svg"
      text = "Humidity"
      value = {props.humidity +"%"} />
      <Info 
      img = "/eye-solid.svg"
      text = "Visibility" 
      value = {Math.floor(props.visibility/1000)+ " km" }/>
    </div>
  )
}
export default WeatherInfo;