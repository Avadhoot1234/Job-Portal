import {
    createBrowserRouter
} from "react-router-dom";
import React from 'react'
import Home from "../Pages/Home";
import App from "../App";
import About from "../Pages/About";
import MyJobs from "../components/MyJobs";

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
        },
        {
          path:'/myjob',
          element:<MyJobs/>
        }
      ]
    },
  ]);

export default router;