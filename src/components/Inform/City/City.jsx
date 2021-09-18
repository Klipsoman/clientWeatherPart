import React from 'react'
import { useSelector } from 'react-redux'
import style from './City.module.css'


const City = () => {
    let city = useSelector(state=>state.main.city)
    let error = useSelector(state=>state.main.cityError)
    return <h2 className={style.city}>
        {error ? <span style={{color: 'red', textTransform: 'Uppercase'}}>Город введен неверно</span> : city}
    </h2>
}

export default City