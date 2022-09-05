import React from "react";
import './styles/App.css'
import {Route, Routes} from "react-router-dom";
import Posts from "./Components/pages/Posts";
import About from "./Components/pages/About";
import Error from "./Components/pages/Error";
import Main from "./Components/pages/Main";
import Post from "./Components/pages/Post";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/posts' element={<Posts/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/posts/:id' element={<Post/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </div>

    );

}

export default App;
