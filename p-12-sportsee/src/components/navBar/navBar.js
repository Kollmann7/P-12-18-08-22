import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
    return(
        <nav className='navbar'>
            <Link className="home-page" to="/">
                Acceuil
            </Link>
            <Link className="profil-page" to="#profil">
                Profil
            </Link>
            <Link className="settings-page" to="#settings">
                Réglage
            </Link>
            <Link className="community-page" to="#community">
                Communauté
            </Link>
        </nav>
        )
}

export default Navbar