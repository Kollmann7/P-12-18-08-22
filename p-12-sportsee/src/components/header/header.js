import React from 'react'
import Logo from '../logo/logo'
import Navbar from '../navBar/navBar'
import './header.css'

function Header() {
    return (
      <header>
        <Logo />
        <Navbar />
      </header>
    )
}

export default Header