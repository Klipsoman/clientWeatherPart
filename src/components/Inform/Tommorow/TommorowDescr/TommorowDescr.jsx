import React from "react";
import { useSelector } from "react-redux";
import style from "./TommorowDescr.module.css";

const TommorowDescr = () => {
   
  let descr = useSelector(state=>state.main.weather.tommorow.descr)
  let icon = ''

  return (
      
      <div className={style.tommorowDescr}>
          Ожидается: 
          <span>{descr}</span>
          <img src={icon} alt="" />
      </div>

   
  );
};

export default TommorowDescr;
