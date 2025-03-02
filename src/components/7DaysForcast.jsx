import React from 'react'
function DaysForcast(props) {
    const days = props.daily.filter(entry => entry.dt_txt.includes("12:00:00"));
  return (
    <div className='weekly-forcast'>
        <p>7 Days Forcast</p>
        <div className='sorting'>
            {days.map((day) => (
                <div key ={day.dt} className='day-forcast'>
                    <p>{new Date(day.dt * 1000).toDateString().slice(0,3)}</p>
                    <div className='day-img'>
                    <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="" />
                    <p>{day.weather[0].main}</p>
                    </div>
                    <p>{Math.floor(day.main.temp_max)}/{Math.floor(day.main.temp_min)}</p>
                </div>
               
            ))}
        </div>
    </div>
  );
}

export default DaysForcast;