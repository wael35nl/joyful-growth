import React from 'react';

import style from '../module.css/layout.module.css';
import logo from '../images/logo.png';

const Navbar = ({ page, setPage }) => {
    return (
        <header>
            <p className={style.logo}>
                <span>J</span>
                <span>O</span>
                <img src={logo} alt='logo' />
                <span>F</span>
                <span>U</span>
                <span>L</span>&nbsp;
                <span>G</span>
                <span>R</span>
                <span>O</span>
                <span>W</span>
                <span>TH</span>
            </p>
            <nav>
                <p onClick={() => setPage('home')} className={page === 'home' && style.current_page}>Home</p>
                <p onClick={() => setPage('about')} className={page === 'about' && style.current_page}>About Us</p>
                <p onClick={() => setPage('coaching')} className={page === 'coaching' && style.current_page}>Job Coaching</p>
                <p onClick={() => setPage('mind')} className={page === 'mind' && style.current_page}>Mindset</p>
                <p onClick={() => setPage('course')} className={page === 'course' && style.current_page}>Courses</p>
                <p onClick={() => setPage('contact')} className={page === 'contact' && style.current_page}>Contact</p>
            </nav>
        </header>
    );
}

export default Navbar;