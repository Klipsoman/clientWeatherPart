import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewCity } from "../../../reducers/mainReducer";
import style from "./SearchInput.module.css";

const SearchInput = () => {
  let newCity = useSelector((state) => state.main.newCity);
  let dispatch = useDispatch();

  function changeInputHandle(e) {
    let cityName = e.target.validity.valid ? e.target.value : ''
    dispatch(setNewCity(cityName));
  }
  function keyDownInputHandle(e){
    if(e.keyCode >= 48 && e.keyCode <= 58) alert('Можно ввести только символы')
  }

  return (
    <div className={style.searchInputBlock}>
      <input
        type="text"
        className={style.searchInput}
        required
        value={newCity}
        autoComplete="off"
        placeholder="Введите город"
        pattern="[а-яА-Я/\s/-]*"
        title="Только русские буквы"
        onChange={changeInputHandle}
        onKeyDown={keyDownInputHandle}
      />
    </div>
  );
};

export default SearchInput;
