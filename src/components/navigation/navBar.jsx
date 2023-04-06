import React from 'react'

import './navBar.css';

const NavBar = () => {
    return (
    <div className = "navbar-container">
        <h1 className="website-name"><a className="title-link" href={`/`}>Trash & Treasure</a></h1>
        <nav className="link-container">
            <a className="link" href={`/aboutPage`}>About</a>
            <a className="link" href={`/loginPage`}>Login</a>
        </nav>
    </div>
    )
}

export default NavBar;