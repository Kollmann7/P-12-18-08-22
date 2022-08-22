import React from 'react'
import { Link } from "react-router-dom"
import  Zen  from '../../assets/icon_zen.svg'
import  Swim  from '../../assets/icon_swim.svg'
import  Bike  from '../../assets/icon_bike.svg'
import  Dumbbell  from '../../assets/icon_dumbbell.svg'
import './sidebar.css'


function SideBar (){
    return(
        <div className='sidebar'>
            <div className='icon-Container'>
                <nav className='nav-icon'>
                    <Link to='#Zen'>
                        <img src={Zen} className='iconBtn' alt='Zen button'/>
                    </Link>
                    <Link to='#Swim'>
                        <img src={Swim} className='iconBtn' alt='Swim button'/>
                    </Link>
                    <Link to='#Bike'>
                        <img src={Bike} className='iconBtn' alt='Bike button'/>
                    </Link>
                    <Link to='#Dumbbell'>
                        <img src={Dumbbell} className='iconBtn' alt='Dumbbell button'/>
                    </Link>
                </nav>
            </div>
            <p className='copyright'>Copiryght, SportSee 2020</p>
        </div>
    )
}

export default SideBar