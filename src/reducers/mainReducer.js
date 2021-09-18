const SET_COORDS = "ADD_COORDS";
const SET_CITY = "SET_CITY";
const SET_NEWCITY = "SET_NEWCITY";
const SET_WICHTIME = "SET_WICHTIME"
const SET_CURRENT = "SET_CURRENT";
const SET_PERDAY = "SET_PERDAY";
const SET_TOMMOROW = "SET_TOMMOROW";
const SET_WEEK = "SET_WEEK";
const SET_CITY_ERROR = "CITY_ERROR"
const CLEAR_CITY_ERROR = "CLEAR_CITY_ERROR"

const initialState = {
  city: "",
  newCity: "",
  cityError: false,
  lat: null,
  lon: null,
  whichTime: 'today',
  weather: {
    current: {
      temp: null,
      wind: null,
      sunset: null,
      sunrise: null,
      descr: null,
      icon: null,
    },
    perDay: {
      morn: null,
      day: null,
      eve: null,
      night: null,
      icon: null,
    },
    tommorow: {
      wind: null,
      sunset: null,
      sunrise: null,
      morn: null,
      day: null,
      eve: null,
      night: null,
      descr: null,
      icon: null,
    },
    week: null,
  },
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COORDS:
      return {
        ...state,
        lat: action.lat,
        lon: action.lon,
      };
    case SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case SET_NEWCITY:
      return {
        ...state,
        newCity: action.payload,
      };
    case SET_WICHTIME:
      return {
        ...state,
        whichTime: action.payload
      }
    case SET_CURRENT:
      return {
        ...state,
        weather: {
          ...state.weather,
          current: {
            temp: action.payload.temp,
            wind: action.payload.wind,
            sunset: action.payload.sunset,
            sunrise: action.payload.sunrise,
            descr: action.payload.descr,
            icon: action.payload.icon,
          },
        },
      };
    case SET_PERDAY:
      return {
        ...state,
        weather: {
          ...state.weather,
          perDay: {
            morn: action.payload.morn,
            day: action.payload.day,
            eve: action.payload.eve,
            night: action.payload.night,
            icon: action.payload.icon
          },
        },
      };
    case SET_TOMMOROW:
      return {
        ...state,
        weather: {
          ...state.weather,
          tommorow: {
            wind: action.payload.wind,
            sunset: action.payload.sunset,
            sunrise: action.payload.sunrise,
            morn: action.payload.morn,
            day: action.payload.day,
            eve: action.payload.eve,
            night: action.payload.night,
            descr: action.payload.descr,
            icon: action.payload.icon,
          },
        },
      };
    case SET_WEEK:
      return {
        ...state,
        weather: {
          ...state.weather, 
          week: action.payload
        }
      }
    case SET_CITY_ERROR:
      return {
        ...state,
        cityError: true
      }
    case CLEAR_CITY_ERROR:
    return{
      ...state,
      cityError: false
    }  
       default:
      return state;
  }
}

export const setCoords = (lat, lon) => ({ type: SET_COORDS, lat, lon });
export const setCity = (city) => ({ type: SET_CITY, payload: city });
export const setNewCity = (city) => ({ type: SET_NEWCITY, payload: city });
export const setWichTime = (payload) => ({type: SET_WICHTIME, payload})
export const setCurrent = (payload) => ({
  type: SET_CURRENT,
  payload,
});
export const setPerDay = (payload) => ({
  type: SET_PERDAY,
  payload,
});
export const setTommorow = (payload) => ({
  type: SET_TOMMOROW,
  payload,
});
export const setWeek = (payload) => ({type: SET_WEEK, payload})
export const errorCitySet = () => ({type: SET_CITY_ERROR})
export const errorCityClear = () => ({type: CLEAR_CITY_ERROR})
