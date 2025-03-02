import React, {useState} from 'react'
import axios from 'axios';
import CurrentWeather from './Components/currentWeather';
import SearchBar from './components/SearchBar';
import HourForcast from './components/24hourForcast';
import WeatherInfo from './components/WeatherInfo';
import DaysForcast from './components/7DaysForcast';

export default function App() {
  const[firstSearch, isFirstSearch] = useState(false);
  const [weather, setWeather] = useState({
    hourlyForcast : {},
    forcast : {},
    dailyForcast : {},
    error : false
  });
  async function search(input){
    try {
    const urlForcast = ("https://api.openweathermap.org/data/2.5/weather");
    const urlhourlyForcast = ("https://api.openweathermap.org/data/2.5/forecast");
    const API_KEY = import.meta.env.VITE_API_KEY;
    const forcast = await axios.get(urlForcast,{
      params : {
        q : input,
        units : 'metric',
        appid : API_KEY,
      },
    });
    const hourlyForcast = await axios.get(urlhourlyForcast, {
      params : {
        q : input,
        units : 'metric',
        appid : API_KEY,
        cnt : "6"
      }
    });
    const dailyForcast = await axios.get(urlhourlyForcast,{
      params : {
        lat : forcast.data.coord.lat,
        lon : forcast.data.coord.lon,
        units : 'metric',
        appid : API_KEY,
      }
    });
    setWeather({
      forcast : forcast.data,
      hourlyForcast : hourlyForcast.data,
      dailyForcast : dailyForcast.data,
      error : false
    });
    isFirstSearch(true);
  }
  catch(err){
    console.log(err);
    setWeather({error : true});
  }
}

  return ( 
  <div style={{ marginTop: firstSearch? "12px" : "30vh" }}>
    {firstSearch ?  null :
      <div>
        <h1>Find the Weather <br /> in Your City</h1>
      </div>
    }
    <SearchBar
    search = {search}
      />
      {weather.error && (
      <div>
        <h2 style ={{marginTop: firstSearch? "40vh" : null }}>No City found ☹️ </h2>
      </div>
    )}
       {weather.forcast?.name && (
      <div className='webpage'>
      <div>

     <CurrentWeather
    name = {weather.forcast?.name}
    temp = {weather.forcast?.main?.temp}
    icon = {weather.forcast?.weather?.[0]?.icon}
    desc = {weather.forcast?.weather?.[0]?.main}
    />
    <HourForcast 
    list = {weather.hourlyForcast?.list}
      />
    <WeatherInfo 
     feelsLike = {weather.forcast?.main?.feels_like}
     wind = {weather.forcast?.wind?.speed * (18/5)}
     humidity = {weather.forcast?.main?.humidity}
     visibility = {weather.forcast?.visibility}
     />
     
    </div>
     
    <DaysForcast 
      daily = {weather.dailyForcast?.list}/>
   
    </div>
      )}
  </div>
  )
}
