import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo]=useState({
        city: "Pune", 
        feelsLike: 26.59,
        humidity: 80,
        temp: 25.86,
        tempMax: 25.86,
        tempMin: 25.86, 
        weather:"broken clouds",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };

    return(
        <div style={{textAlign: "center"}}>
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo}></SearchBox>
        <InfoBox info={weatherInfo}></InfoBox>
        </div>
    )
}