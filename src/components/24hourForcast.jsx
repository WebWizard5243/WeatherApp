import React from 'react'

 function HourForcast(props) {
    const list = props.list;
  return (
    <div className='today-forcast' >
        <p className='forcast-heading'>Today's Forcast</p>
        <div className='hourly-forcast'>
    {list.map((examples, index) => (
      <div className='forcast' key={examples.dt}>
        <p className='time'>{(examples.dt_txt).slice(11,16)}</p>
        <img src={`https://openweathermap.org/img/wn/${examples.weather[0].icon}@2x.png`} alt="Weather Icon" />
        <p>{Math.floor(examples.main.temp)}°C</p>
      </div>
    ))}
  </div>
  </div>
  );
}

export default HourForcast;