import React from 'react'

 function CurrentWeather(props) {
  return (
    <div className='current-forcast'>
        <div className='text'>
        <h3>{props.name}</h3>
        <h2>{Math.floor(props.temp)}°C</h2>
        </div>
        <div className="icons">
        <img className='weather-icon' src={`https://openweathermap.org/img/wn/${props.icon}@2x.png
`} alt="" />
        <p>{props.desc}</p>
        </div>
    </div>
  )
}
export default CurrentWeather;