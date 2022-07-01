import React from 'react';
import "../Styles/navigation.css"

import logo from "../Images/netflix-logo.png";
import avatar from "../Images/netflix-avatar.png";
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'

function Navigation() {
    const [changeBackground, setChangeBackground] = useState(false)
    const [openMenuMobile, setOpenMenuMobile] = useState(false)

    const handleScroll = () => {
        if(window.pageYOffset > 250){
            setChangeBackground(prevValue => true);
        }else{
            setChangeBackground(prevValue => false);
        }
    }

    const openMobileMenu = () => {
        setOpenMenuMobile(prevVal => !prevVal)
        if(window.pageYOffset < 250){
            changeBackground === false ? setChangeBackground(prevValue => true) : setChangeBackground(prevValue => false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    return (
        <nav className={changeBackground ? 'navigation black-background' : "navigation no-background"}>
            <div className="hamburger-btn" onClick={openMobileMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="logo-navigation">
                <img src={logo} alt="netflix logo" />
                <ul className={`navigation ${openMenuMobile && 'active'}`}>
                    <li className='home'><a href="#">Home</a></li>
                    <li className='tv'><a href="#">Tv Shows</a></li>
                    <li className='movies'><a href="#">Movies</a></li>
                    <li className='new-popular'><a href="#">New&#38;Popular</a></li>
                    <li className='list'><a href="#">My List</a></li>
                    <li className='kids'><a href="#">Kids</a></li>
                </ul>
            </div>
            <div className="search-account">
                <div className="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div className="kid-link">
                    <a href="#">Kids</a>
                </div>
                <div className="notifications">
                    <FontAwesomeIcon icon={faBell} />
                </div>
                <div className="my-account">
                    <img src={avatar} alt="customer avatar" />
                </div>
            </div>
        </nav>
    );
}

export default Navigation;