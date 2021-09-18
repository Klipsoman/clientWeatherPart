import * as axios from "axios";
import { URL_INSTANCE, URL_USERLOCATION } from "../config";
import { errorCityClear, errorCitySet, setCity, setCoords, setCurrent, setPerDay, setTommorow, setWeek } from "../reducers/mainReducer";

    export const userLocation = () => {
        return async (dispatch) => {
        try {
            let response = await axios.get(`${URL_USERLOCATION}json/?lang=ru`)
            let city = response.data.city
            dispatch(setCity(city))
            return city
        } catch (error) {
            console.log('Find geoposition error: ' + error)
        }
    }
}

  export const getCoords = (city) =>  {
        return async dispatch => {
        try {
            let response = await axios.get(`${URL_INSTANCE}api/geo/city?city=${city}`)
            let {geo_lat, geo_lon} = response.data[0]
            dispatch(setCoords(geo_lat, geo_lon))
            dispatch(setCity(city))
            return {geo_lat, geo_lon}
        } catch (error) {
            console.log('Get coords error: ' + error)
        }
    }
}

   export const getWeatherForecast = (lat, lon) => {
        return async dispatch => {
        try {
            let response = await axios.get(`${URL_INSTANCE}api/geo/weather?lat=${lat}&lon=${lon}`)
            let {current} = response.data
            let currentTemp = Math.round(current.temp)
            let currentSunset = new Date(current.sunset * 1000).toLocaleTimeString()
            let currentSunrise = new Date(current.sunrise * 1000).toLocaleTimeString()
            let currentDescr = current.weather[0]["description"]
            let currentWind = Math.round(current.wind_speed)
            let currentIcon = `https://openweathermap.org/img/wn/${current.weather[0]["icon"]}@2x.png`     
            dispatch(setCurrent({temp:currentTemp, wind:currentWind, sunset:currentSunset, sunrise: currentSunrise, icon:currentIcon, descr: currentDescr}))
            let perDay = response.data.daily[0].temp
            let mornToday = Math.round(perDay.morn)
            let dayToday = Math.round(perDay.day)
            let eveToday = Math.round(perDay.eve)
            let nightToday = Math.round(perDay.night)
            let iconToday =  `https://openweathermap.org/img/wn/${response.data.daily[0].weather[0]["icon"]}@2x.png`
            dispatch(setPerDay({morn: mornToday, day: dayToday, eve: eveToday, night: nightToday, icon: iconToday}))
            let tommorow = response.data.daily[1]
            let windTommorow = Math.round(tommorow.wind_speed)
            let sunsetTommorow = new Date(
                tommorow.sunset * 1000
              ).toLocaleTimeString()
            let sunriseTommorow = new Date(
                tommorow.sunrise * 1000
              ).toLocaleTimeString()
            let mornTommorow = Math.round(tommorow.temp.morn)
            let dayTommorow = Math.round(tommorow.temp.day)
            let eveTommorow = Math.round(tommorow.temp.eve)
            let nightTommorow = Math.round(tommorow.temp.night)
            let descrTommorow = tommorow.weather[0].description
            let iconTommorow = `https://openweathermap.org/img/wn/${tommorow.weather[0]["icon"]}@2x.png`
            dispatch(setTommorow({
                wind: windTommorow,
                sunset: sunsetTommorow,
                sunrise: sunriseTommorow,
                morn: mornTommorow,
                day: dayTommorow,
                eve: eveTommorow,
                night: nightTommorow,
                descr: descrTommorow,
                icon: iconTommorow
            }))
            let week = response.data.daily
            dispatch(setWeek(week))
            dispatch(errorCityClear())
        } catch (error) {
            console.log('Get weather forecast error: ' + error)
            dispatch(errorCitySet())
        }
    }
}



