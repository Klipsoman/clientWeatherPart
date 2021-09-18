import React from 'react'
import style from './Content.module.css'
import Footer from './Footer/Footer'
import Inform from './Inform/Inform'
import Line from './Line/Line'
import Search from './Search/Search'
import SwitchButtons from './SwitchButtons/SwitchButtons'


const Content = () => {
    return <div className={style.contentWrapper}>
        
        <header className={style.header}> Узнай погоду в своём городе
        
        </header>

         <div className={style.contentWrapperWrapp}>  
        
        <Inform />
        
        <SwitchButtons />
        <Line />
        <Search />
        </div> 

        <Footer />
       
        
    </div>
}

export default Content