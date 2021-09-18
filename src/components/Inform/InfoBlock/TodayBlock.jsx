import React from "react";
import CurrentBlock from "./CurrentBlock/CurrentBlock";
import style from "./TodayBlock.module.css";
import PerDayBlock from "./PerDayBlock/PerDayBlock";

const TodayBlock = () => {
  return (
    <div className={style.infoBlock}>
      <CurrentBlock />
      <PerDayBlock />
    </div>
  );
};

export default TodayBlock;
