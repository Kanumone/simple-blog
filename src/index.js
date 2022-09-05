import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import NavBar from "./Components/UI/navbar/NavBar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <NavBar/>
        <App/>
    </Router>
);
