import React from "react";
import style from "./CurrentBlock.module.css";
import term from "../../../../imgs/term.png";
import sunsetpng from "../../../../imgs/sunset.png";
import sunrisepng from "../../../../imgs/sunrise.png";
import windpng from "../../../../imgs/wind.png";
import { useSelector } from "react-redux";

const CurrentBlock = () => {
  const {temp, wind, descr, sunset, sunrise, icon} = useSelector(state=>state.main.weather.current)

  return (
    <div className={style.currentBlock}>
      <h3 className={style.currentBlock_header}>сейчас:</h3>
      <div className={style.weatherNow}>
        <div className={style.weatherNowItem}>
          <p>{temp}</p>
          <div className={style.weatherNowItem_imgBlock}>
            <img src={term} alt={"icon"}/>
          </div>
        </div>
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

export default CurrentBlock;
