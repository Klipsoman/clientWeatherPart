import React from "react";
import style from "./TommorowParameters.module.css";
import sunsetpng from "../../../../imgs/sunset.png";
import sunrisepng from "../../../../imgs/sunrise.png";
import windpng from "../../../../imgs/wind.png";
import { useSelector } from "react-redux";

const TommorowParameters = () => {
  let {wind,sunset,sunrise,descr, icon} = useSelector(state=>state.main.weather.tommorow)

  return ( <div className={style.tommorowParameters}>
      <div className={style.weatherNow}>
        <div className={style.weatherNowItem}>
          <p>{descr}</p>
          <div className={style.weatherNowItem_imgBlock}>
            <img src={icon} alt={"icon"} />
          </div>
        </div>
        <div className={style.weatherNowItem}>
          <p>{sunrise}</p>
          <div className={style.weatherNowItem_imgBlock}>
            <img src={sunsetpng} alt={"icon"} />
          </div>
        </div>
        <div className={style.weatherNowItem}>
          <p>{sunset}</p>
          <div className={style.weatherNowItem_imgBlock}>
            <img src={sunrisepng} alt={"icon"} />
          </div>
        </div>
        <div className={style.weatherNowItem}>
          <p>{wind + ' м/с'}</p>
          <div className={style.weatherNowItem_imgBlock}>
            <img src={windpng} alt={"icon"} />
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default TommorowParameters;
