import { useEffect} from "react";
import { useDispatch} from "react-redux";
import { getCoords, getWeatherForecast, userLocation } from "./api/geolocation";
import "./App.css";
import Content from "./components/Content";

function App() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    enterGetInfo()  
  },[])

  async function enterGetInfo(){
    let city = await dispatch(userLocation())
    let {geo_lat, geo_lon} = await dispatch(getCoords(city))
    dispatch(getWeatherForecast(geo_lat, geo_lon))
  }

  return <div>
      <Content />
    </div>;
}

export default App;
