import React from 'react';
import classes from "./NavBar.module.css"
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={classes.navbar}>
            <Link className={classes.navbar__link} to='/'>Главная</Link>
            <Link className={classes.navbar__link} to='/posts'>Посты</Link>
            <Link className={classes.navbar__link} to='/about'>О проекте</Link>
        </nav>
    );
};

export default NavBar;