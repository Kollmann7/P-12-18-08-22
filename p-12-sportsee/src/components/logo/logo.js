import React from 'react'
import sportseeLogo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function Logo () {
    return(
        <h1>
            <Link to="/">
                <img className='logo-header' src={ sportseeLogo } alt='Sport See Logo'/>
            </Link>
        </h1>
    )
}

export default Logo