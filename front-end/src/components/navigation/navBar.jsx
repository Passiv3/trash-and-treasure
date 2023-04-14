import React from 'react';
import {Link} from 'react-router-dom';
import './navBar.css';

const NavBar = () => {
    return (
    <div className = "navbar-container">
        <h1 className="website-name"><Link to={`/front`} className="title-link">Trash & Treasure</Link></h1>
        <nav className="link-container">
            <Link to={`/new`} className="link">Add an Item!</Link>
            <Link to={`/about`} className="link">About</Link>
            <Link to={`/login`} className="link">Login</Link>
        </nav>
    </div>
    )
}

export default NavBar;