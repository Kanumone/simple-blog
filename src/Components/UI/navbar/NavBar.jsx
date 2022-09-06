import React, {useContext} from 'react';
import classes from "./NavBar.module.css"
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context";

const NavBar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    function logout() {
        localStorage.removeItem('auth');
        setIsAuth(false);
    }
    return (
        <nav className={classes.navbar}>
            <Link className={classes.navbar__link} to='/'>Главная</Link>
            <Link className={classes.navbar__link} to='/posts'>Посты</Link>
            <Link className={classes.navbar__link} to='/about'>О проекте</Link>
            {isAuth ? <Link className={classes.navbar__link} to='login' onClick={logout}>Выйти</Link>
            : <Link className={classes.navbar__link} to='/login'>Войти</Link>}
        </nav>
    );
};

export default NavBar;