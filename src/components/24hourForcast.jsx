// import React from 'react'

// const example  = [
//     {
//         time : "6:00 AM",
//         img : "/src/assets/sunny-svgrepo-com.svg",
//         degree : "25"
//     },
//     {
//         time : "9:00 AM",
//         img : "/src/assets/sunny-svgrepo-com.svg",
//         degree : "25"
//     },
//     {
//         time : "12:00 PM",
//         img : "/src/assets/sunny-svgrepo-com.svg",
//         degree : "25"
//     },
//     {
//         time : "3:00 PM",
//         img : "/src/assets/sunny-svgrepo-com.svg",
//         degree : "25"
//     },
//     {
//         time : "6:00 PM",
//         img : "/src/assets/cloud-solid (1).svg",
//         degree : "25"
//     },
//     {
//         time : "9:00 PM",
//         img : "/src/assets/cloud-solid (1).svg",
//         degree : "25"
//     }
// ]

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