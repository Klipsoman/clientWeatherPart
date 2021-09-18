import React from 'react'
import style from './Footer.module.css'



const Footer = (props) => {
    return <footer className={style.footerBlock}>  
            <div>17:35</div>
            <div>Погода предоставлена сервисом <a href="https://openweathermap.org">https://openweathermap.org</a></div>
    </footer>
}

export default Footer