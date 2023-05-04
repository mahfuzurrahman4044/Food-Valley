import React from 'react';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from '../Home/Home';
import Blog from '../Blog/Blog';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Main from '../Main/Main';
import Recipe from '../Recipe/Recipe';
import Error from '../Error/Error';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
            },
            {
                path: "/recipe/:id",
                element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/chef/${params.id}`)
            },
            {
                path: "*",
                element: <Error></Error>
            }
        ],
    }
    // {
    //     path: "/recipe/:id",
    //     element: <Recipe></Recipe>,
    //     loader: ({ params }) => fetch(`http://localhost:3000/chef/${params.id}`)
    // }
]);

export default router;