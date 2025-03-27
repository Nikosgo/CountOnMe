import React from 'react';
import { Link, useLocation } from "react-router-dom";

import './styles.css';
import CountOnMeIcon from './CountOnMeIcon.png';
import LoggedInElements from './LoggedInElements.tsx';

const Header: React.FC = () => {
    const location = useLocation();
    return (
        <div className="background">
            <ul className="header">
                {location.pathname === "/" ?
                    <></> :
                    <li className="left-mobile-menu-button">

                    </li>
                }
                <li className="logoDiv left">
                    <a href="/">
                        <img src={CountOnMeIcon} alt="CountOnMe logo" className="logoStyle" />
                    </a>
                </li>
                <li className="left logoName">
                    <a href="/">
                        Count On Me
                    </a>
                </li>
                {location.pathname === "/" ?
                    <></>
                    :
                    <>
                        <LoggedInElements />
                    </>
                }
            </ul>
        </div>
    );
}

export default Header;
