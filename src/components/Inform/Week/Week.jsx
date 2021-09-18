import React from "react";
import { useSelector } from "react-redux";
import style from "./Week.module.css";

const Week = () => {
  const week = useSelector(state=>state.main.weather.week)

    const changeDate = (num) => {
        return num < 10 ? '0' + num : num;
    }
  
  if(week == null) return <>Упс... что-то пошло не так...</>
  
  const view = week.map((elem, ind) => {
    let temp = Math.round(elem.temp.day)
    let icon = `https://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`
    let descr = elem.weather[0].description;
    let date = new Date(elem.dt * 1000);
    let day = date.getDate();
    day = changeDate(day)
    let month = date.getMonth() + 1;
    month = changeDate(month)  

    return (
      <div key={ind} className={style.dayItem}>
        <div className={style.date}>{day + "." + month}</div>
        <div className={style.dayTemp}>{temp}</div>
        <div className={style.dayIcon}>
          <img src={icon} alt={"icon"} />
        </div>
        <div>
            {descr}
        </div>
      </div>
    );
  });

  return <div className={style.weekBlock}>{view}</div>;

};

export default Week;
