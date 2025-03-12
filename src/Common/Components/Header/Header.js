import React from 'react';
import './styles.css';
import CountOnMeIcon from './CountOnMeIcon.png'
import { MdCurrencyExchange } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";

const Header = () => {

    return (
        <div class="background">
            <ul class="header">
                <li class="logoDiv left">
                    <a href="#landing">
                        <img src={CountOnMeIcon} alt="CountOnMelogo" class="logoStyle"/>
                    </a>
                </li>
                <li class="left logoName">
                     <a href="#landing">
                        Count On Me
                    </a>
                </li>
                <li class="right">
                    <a href="#profile">
                        <RiAccountCircleLine className="iconProfileStyle" />        
                    </a>
                </li>
                <li class="right">
                    <a href="#exchange">
                        <MdCurrencyExchange className="iconExchangeStyle"/>
                    </a>
                </li>
            </ul>
        </div>
    );

}

export default Header;
