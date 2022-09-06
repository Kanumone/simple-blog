import React, {useEffect, useState} from "react";
import './styles/App.css'
import AppRouter from "./Components/AppRouter";
import {AuthContext} from "./context";
import NavBar from "./Components/UI/navbar/NavBar";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{
                isAuth,
                setIsAuth
        }}>
            <NavBar/>
            <div className="App">
                <AppRouter/>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
