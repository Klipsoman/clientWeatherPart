import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import style from './SwitchButtons.module.css'
import {setWichTime} from '../../reducers/mainReducer'

const SwitchButtons = () => {
    const dispatch = useDispatch()
    let whichTime = useSelector(state=>state.main.whichTime)
    return <div className={style.switchButtonsWrapper}>
        <button  className={whichTime === "today" ? style.active : ''} onClick={()=>{dispatch(setWichTime("today"))}}>Сегодня</button>
        <button  className={whichTime === "tommorow" ? style.active : ''} onClick={()=>{dispatch(setWichTime("tommorow"))}}>Завтра</button>
        <button  className={whichTime === "week" ? style.active : ''} onClick={()=>{dispatch(setWichTime("week"))}}>На 7 дней</button>    
    </div>
}

export default SwitchButtons