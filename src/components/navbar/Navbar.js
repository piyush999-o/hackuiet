import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {

    const [btn_t, setbtn_t] = useState("off")
    const toggle = () => {
        if (btn_t==='off') {
            setbtn_t('on')
        } else {
            setbtn_t('off')
        }
    }

    return (
        <>
            <nav className='sticky-top'>
                <ul>
                    <Link to="/" className="brand">HackUIET</Link>
                    <li><i className={`fas fa-bars fa-lg toggle-btn ${btn_t === "off" ? "close" : "open"}`} role="button" onClick={toggle}></i></li>
                        <section className={`collapses ${btn_t === "off" ? "off" : "on"}`}>
                            <li><Link to="/" className="bloglink">Home</Link></li>
                            <li><Link to="/about" className="bloglink">About</Link></li>
                            <li><Link to="/blog" className="bloglink">Blog</Link></li>
                            <li><Link to="/contact" className="bloglink">Contact</Link></li>

                            
                        </section>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
