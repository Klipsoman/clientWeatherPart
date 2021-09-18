import React from "react";
import style from "./Tommorow.module.css";
import TommorowPerDay from "./TommorowPerDay/TommorowPerDay";
import TommorowParameters from "./TommorowParameters/TommorowParameters";
import TommorowDescr from "./TommorowDescr/TommorowDescr";

const Tommorow = () => {

  return (
    <div className={style.tommorowBlock}>       
      <h3 className={style.tommorowHeader}>завтра в течении дня:</h3>   
      <TommorowParameters />
      <TommorowPerDay/>
      <TommorowDescr />
    </div>
  );
};

export default Tommorow;
