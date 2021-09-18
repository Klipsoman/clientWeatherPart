import React from "react";
import { useSelector } from "react-redux";
import style from "./TommorowPerDay.module.css";

const TommorowPerDay = () => {
  let {morn, day, eve, night, icon} = useSelector(state=>state.main.weather.tommorow)

  return (      
      <div className={style.tommorowPerDayBlock}>
        <div className={style.dayTime}>
          <div className={style.dayTimeElem}>
            <h4>утром </h4>
            <div className={style.dayTimeElem_time}>{morn}</div>
            <div className={style.dayTimeElem_imgBlock}>
              <img src={icon} alt={"icon"} />
            </div>
          </div>
          <div className={style.dayTimeElem}>
            <h4> днем </h4>
            <div className={style.dayTimeElem_time}>{day}</div>
            <div className={style.dayTimeElem_imgBlock}>
              <img src={icon} alt={"icon"} />
            </div>
          </div>
          <div className={style.dayTimeElem}>
            <h4> вечером </h4>
            <div className={style.dayTimeElem_time}>{eve}</div>
            <div className={style.dayTimeElem_imgBlock}>
              <img src={icon} alt={"icon"} />
            </div>
          </div>
          <div className={style.dayTimeElem}>
            <h4> ночью </h4>{" "}
            <div className={style.dayTimeElem_time}>{night}</div>
            <div className={style.dayTimeElem_imgBlock}>
              <img src={icon} alt={"icon"} />
            </div>
          </div>
        </div>
      </div>
  );
};

export default TommorowPerDay;
