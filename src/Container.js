import React, { useEffect } from 'react'
import './Container.css';

function Container({city,temperature, description,windspeed,winddegree, pressure, precip, humidity, cloudcover, uvindex, visibility,dewpoint,icon,min1,min2,min3,max1,max2,max3,desc1,desc2,desc3, min4,max4, desc4, icon1, icon2, icon3, icon4}) {
    const today = new Date();
    const date = today.getDate();
    const day= today.getDay();
    const month = today.getMonth();
    const year = today.getFullYear();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday", "Monday", "Tuesday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log(days[day]);
    console.log(months[month]);

    useEffect(()=>{

    })
    return (
        <div className="container">
                <div class="weather-side">
                    <div class="weather-gradient"></div>
                    <div class="date-container">
                    <h2 class="date-dayname">{days[day]}</h2><span class="date-day">{date} {months[month]} {year}</span><span class="location">{city}</span>
                    </div>
                    <img class ="weather_icon"src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/>
                    <div class="weather-container">
                        <h1 class="weather-temp">{temperature}°C</h1>
                        <h3 class="weather-desc">{description}</h3>
                     </div>
                </div>
                <div class="info-side">
                    <div class="today-info-container">
                        <div class="today-info">                            
                            <div class="wind-speed"> <span class="title">WIND SPEED</span><span class="value">{windspeed} m/s</span>
                            <div class="clear"></div>
                            </div>
                            <div class="wind-degree"> <span class="title">WIND DEGREE</span><span class="value">{winddegree} °</span>
                            <div class="clear"></div>
                            </div>
                            <div class="pressure"><span class="title">PRESSURE</span><span class="value">{pressure} hPa</span>
                            <div class="clear"></div>
                            </div>
                            <div class="precip"> <span class="title">PROB of PRECIPITATION</span><span class="value">{precip} </span>
                            <div class="clear"></div>
                            </div>
                            <div class="humidity"> <span class="title">HUMIDITY</span><span class="value">{humidity} %</span>
                            <div class="clear"></div>
                            </div>
                            <div class="cloudcover"> <span class="title">CLOUD COVER</span><span class="value">{cloudcover} %</span>
                            <div class="clear"></div>
                            </div>
                            <div class="uvindex"> <span class="title">UV INDEX</span><span class="value">{uvindex}</span>
                            <div class="clear"></div>
                            </div>
                            <div class="visibility"> <span class="title">VISIBILITY</span><span class="value">{visibility/1000} Km</span>
                            <div class="clear"></div>
                            </div>
                            <div class="dewpoint"> <span class="title">DEW POINT</span><span class="value">{dewpoint} °C </span>
                            <div class="clear"></div>
                            </div>
                       </div>
                    </div>
                    <div class="week-container">
                        <ul class="week-list">
                            <li ><span class="day-name">{days[day]}</span><span class="day-temp-min">Min - {min1}°C</span><span class="day-temp-max">Max - {max1}°C</span><span class="day-desc"><img class ="day-icon"src={`http://openweathermap.org/img/wn/${icon1}@2x.png`} alt=""/>{desc1}</span></li>
                            <li ><span class="day-name">{days[day+1]}</span><span class="day-temp-min">Min - {min2}°C</span><span class="day-temp-max">Max - {max2}°C</span><span class="day-desc"><img class ="day-icon"src={`http://openweathermap.org/img/wn/${icon2}@2x.png`} alt=""/>{desc2}</span></li>
                            <li ><span class="day-name">{days[day+2]}</span><span class="day-temp-min">Min - {min3}°C</span><span class="day-temp-max">Max - {max3}°C</span><span class="day-desc"><img class ="day-icon"src={`http://openweathermap.org/img/wn/${icon3}@2x.png`} alt=""/>{desc3}</span></li>
                            <li ><span class="day-name">{days[day+3]}</span><span class="day-temp-min">Min - {min4}°C</span><span class="day-temp-max">Max - {max4}°C</span><span class="day-desc"><img class ="day-icon"src={`http://openweathermap.org/img/wn/${icon4}@2x.png`} alt=""/>{desc4}</span></li>
                            <div class="clear"></div>
                        </ul>
                    </div>
                </div>
            </div> 
        
    )
}

export default Container
