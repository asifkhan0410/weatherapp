import React, { useEffect, useState } from 'react';
import './Search.css';
import './Container.css';
import Container from './Container';

function Search() {
    const [city,setCity]=useState('')
    const [weather, setWeather]= useState([]);
    const [forecast, setForecast]= useState([]);
    const [input, setInput]= useState("");
    const [id,setId]=useState([]);
        
    const myLocation=  (e) => {
        e.preventDefault();
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
          
           fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=minutely,hourly,alerts&units=metric&appid=4b9fd246ce353186bf870980237fe834`).then(res => res.json()).then(result => {
            console.log(result);
            setId(result.current.weather[0].icon);
            setWeather([result.current.temp,result.current.weather[0].main,result.current.wind_speed,result.current.wind_deg,result.current.pressure,result.daily[0].pop,result.current.humidity,result.current.clouds,result.current.uvi,result.current.visibility,result.current.dew_point]);
            setForecast([result.daily[1].temp.min, result.daily[1].temp.max, result.daily[1].weather[0].main, result.daily[2].temp.min,result.daily[2].temp.max,result.daily[2].weather[0].main,result.daily[3].temp.min,result.daily[3].temp.max,result.daily[3].weather[0].main,result.daily[4].temp.min,result.daily[4].temp.max,result.daily[4].weather[0].main, result.daily[1].weather[0].icon, result.daily[2].weather[0].icon, result.daily[3].weather[0].icon, result.daily[4].weather[0].icon]);
            });
             fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=4b9fd246ce353186bf870980237fe834`).then(res => res.json()).then(result => {
            
                console.log(result);
                setCity(result.city.name);
             });
        });
    };  

    const sendLocation= async (e) => {
        e.preventDefault();
        console.log(input);
        await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=4b9fd246ce353186bf870980237fe834`).then(res =>  res.json()).then(result => {            
            console.log(result);
            setCity(result.city.name);
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${result.city.coord.lat}&lon=${result.city.coord.lon}&exclude=minutely,hourly,alerts&units=metric&appid=4b9fd246ce353186bf870980237fe834`).then(res => res.json()).then(result => {
            console.log(result);
            setId(result.current.weather[0].icon);
            setWeather([result.current.temp,result.current.weather[0].main,result.current.wind_speed,result.current.wind_deg,result.current.pressure,result.daily[0].pop,result.current.humidity,result.current.clouds,result.current.uvi,result.current.visibility,result.current.dew_point]);
            setForecast([result.daily[1].temp.min, result.daily[1].temp.max, result.daily[1].weather[0].main, result.daily[2].temp.min,result.daily[2].temp.max,result.daily[2].weather[0].main,result.daily[3].temp.min,result.daily[3].temp.max,result.daily[3].weather[0].main,result.daily[4].temp.min,result.daily[4].temp.max,result.daily[4].weather[0].main, result.daily[1].weather[0].icon, result.daily[2].weather[0].icon, result.daily[3].weather[0].icon, result.daily[4].weather[0].icon]);
            });
            
        });
        console.log(id);
        setInput("");  
    };

    return (
        <div className="home">
            <form>
                <input value={input} onChange = {(e)=> setInput(e.target.value)} placeholder="Search any city weather" type="text"/>
                <button onClick={sendLocation} type="submit">Search</button>
            </form>
            
            <div className="app_body">
                <Container city={city} temperature ={weather[0]} description={weather[1]} windspeed ={weather[2]}  winddegree={weather[3]} pressure={weather[4]} precip={weather[5]} humidity={weather[6]} cloudcover={weather[7]} uvindex={weather[8]} visibility={weather[9]} dewpoint={weather[10]} icon ={id} min1= {forecast[0]} min2= {forecast[3]} min3= {forecast[6]} min4={forecast[9]} max1= {forecast[1]} max2= {forecast[4]} max3= {forecast[7]} max4={forecast[10]} desc1={forecast[2]} desc2={forecast[5]} desc3={forecast[8]} desc4 ={forecast[11]} icon1={forecast[12]} icon2={forecast[13]} icon3={forecast[14]} icon4={forecast[15]}
                />
                <div class="location-container">
                    <button onClick={myLocation} class="location-button"><span>Change location</span></button>
                </div>
            </div>

            
            
        </div>
    )
}

export default Search
