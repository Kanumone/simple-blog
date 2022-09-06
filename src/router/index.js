import React from "react";
import Main from "../Components/pages/Main";
import Posts from "../Components/pages/Posts";
import About from "../Components/pages/About";
import PostPage from "../Components/pages/PostPage";
import Error from "../Components/pages/Error";
import Login from "../Components/pages/Login";

export const privateRoutes = [
    {path: '/', element: <Main/>},
    {path: '/posts', element: <Posts/>},
    {path: '/about', element: <About/>},
    {path: '/posts/:id', element: <PostPage/>},
    {path: '*', element: <Error/>},
];

export const publicRoutes = [
    {path: '/', element: <Main/>},
    {path: '/login', element: <Login/>},
    {path: '/posts', element: <Login/>},
    {path: '/about', element: <About/>},
    {path: '*', element: <Error/>},
];
