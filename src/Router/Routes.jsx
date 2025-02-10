import {
    createBrowserRouter
} from "react-router-dom";
import React from 'react'
import Home from "../Pages/Home";
import App from "../App";
import About from "../Pages/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/about',
            element:<About/>
        }
      ]
    },
  ]);

export default router;