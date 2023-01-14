import React, { useState } from "react";
import '../index.css';

export default function Navbar(){
    const [active, setActive] = useState("menu");
    const [icon, setIcon] = useState("nav_toggle")
    const toggle = () => {
        active === 'menu' ? setActive('menu nav_active') : setActive('menu');
        icon === 'nav_toggle' ? setIcon('nav_toggle nav_t') : setIcon('nav_toggle');
    }

    return(
        <nav className="navbar">
            <div>
                <img src={require('../images/Logo.png')} alt="KreativeX"></img>
            </div>
            <ul className={active}>
                <li className="item">
                    <a href="#about" className="link">
                        About
                    </a>
                </li>
                <li className="item1">
                    <a href="#services" className="link">
                        Services
                    </a>
                </li>
                <li className="item2">
                    <a href="#portfolio" className="link">
                        Portfolio
                    </a>
                </li>
                <li className="item3">
                    <a href="#contact" className="link">
                        Contact Us
                    </a>
                </li>
            </ul>
            <div onClick={toggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}