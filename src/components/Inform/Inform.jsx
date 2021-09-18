import React from "react";
import { useSelector } from "react-redux";
import City from "./City/City";
import TodayBlock from "./InfoBlock/TodayBlock";
import style from "./Inform.module.css";
import Tommorow from "./Tommorow/Tommorow";
import Week from "./Week/Week";

const Inform = () => {
  const city = useSelector(state=>state.main.city)
  const whichTime = useSelector(state=>state.main.whichTime)

  return (
    <div className={style.informWrapper}>
      <City city={city} />

      {whichTime === 'today' ? <TodayBlock/> : null}
      {whichTime === 'tommorow' ? <Tommorow/> : null}
      {whichTime === 'week' ? <Week/> : null}
      
    </div>
  );
};

export default Inform;
