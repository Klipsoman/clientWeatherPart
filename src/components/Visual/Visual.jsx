import React from 'react'
import style from './Visual.module.css'
import sun from '../imgs/s.png'


const Visual = () => {
    return <div className={style.visualWrapper}>
        <div>
            <img src={sun} alt="" width='200px'/>  
        </div>
        
    </div>
}

export default Visual