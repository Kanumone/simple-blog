import React, {useContext} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/buttons/MyButton";
import classes from "../styles/login.module.css";
import {AuthContext} from "../../context";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const {setIsAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    function login (event) {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
        navigate('/')
    }

    return (
        <div className={classes.wrapper}>
            <h2>Введите данные для входа</h2>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="text" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>

        </div>
    );
};

export default Login;