import React from "react";
import { Link, useLocation } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import '../css/Navbar.css'


const Navbar = () => {

    return (
        <>
            <nav>
                <input type="checkbox" id="nav-toggle" />
                <div className="logo">MINZ<strong>CODE</strong></div>
                <ul className="links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <label htmlFor="nav-toggle" className="icon-burger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </label>
            </nav>
        </>
    )
}

export default Navbar