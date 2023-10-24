import React from 'react';
import logo from '../../images/planet.png';
import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt="img"/>
        </header>
    );
};
