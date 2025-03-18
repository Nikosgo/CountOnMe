import React from 'react';
import { Link, useLocation } from "react-router-dom";

import './styles.css';
import CountOnMeIcon from './CountOnMeIcon.png';
import { MdCurrencyExchange } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";

const Header: React.FC = () => {
    const location = useLocation();
    return (
        <div className="background">
            <ul className="header">
                <li className="logoDiv left">
                    <a href="/">
                        <img src={CountOnMeIcon} alt="CountOnMe logo" className="logoStyle"/>
                    </a>
                </li>
                <li className="left logoName">
                    <a href="/">
                        Count On Me
                    </a>
                </li>
                <li className="right">
                    <Link to="/profile">
                        { location.pathname === "/" ?
                            <RiAccountCircleLine style={{display:'none'}} /> 
                            : location.pathname === '/profile' ? 
                                <RiAccountCircleLine className="iconProfileStyle iconfilled" />
                                : <RiAccountCircleLine className="iconProfileStyle" />        
                        }
                    </Link>
                </li>
                <li className="right">
                    <Link to="/">
                        {
                            location.pathname === "/" ?
                            <MdCurrencyExchange style={{display:'none'}} /> 
                            : <MdCurrencyExchange className="iconExchangeStyle"/>
                        }
                        
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
