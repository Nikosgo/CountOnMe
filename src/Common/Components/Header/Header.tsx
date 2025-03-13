import React from 'react';
import './styles.css';
import CountOnMeIcon from './CountOnMeIcon.png';
import { MdCurrencyExchange } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";

const Header: React.FC = () => {
    return (
        <div className="background">
            <ul className="header">
                <li className="logoDiv left">
                    <a href="#landing">
                        <img src={CountOnMeIcon} alt="CountOnMe logo" className="logoStyle"/>
                    </a>
                </li>
                <li className="left logoName">
                    <a href="#landing">
                        Count On Me
                    </a>
                </li>
                <li className="right">
                    <a href="#profile">
                        <RiAccountCircleLine className="iconProfileStyle" />        
                    </a>
                </li>
                <li className="right">
                    <a href="#exchange">
                        <MdCurrencyExchange className="iconExchangeStyle"/>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Header;
