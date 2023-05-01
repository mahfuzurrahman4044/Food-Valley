import React from 'react';
import Header from '../Header/Header';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header></Header>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            }
        ]
    }
]);

export default router;