import React from 'react';
import { Link, useLocation } from "react-router-dom";

import './styles.css';
import CountOnMeIcon from './CountOnMeIcon.png';
import { MdCurrencyExchange } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";

const LoggedInElements: React.FC = () => {
    const location = useLocation();
    return (
        <>
            <li className="right">
                <Link to="/profile">
                    {location.pathname === '/profile' ?
                        <RiAccountCircleLine className="iconProfileStyle iconfilled" />
                        : <RiAccountCircleLine className="iconProfileStyle" />
                    }
                </Link>
            </li>
            <li className="right">
                <Link to="/">
                    <MdCurrencyExchange className="iconExchangeStyle" />
                </Link>
            </li>
        </>
    );
}

export default LoggedInElements;