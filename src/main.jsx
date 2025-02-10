import './index.css'
import React from 'react'
import  ReactDOM from "react-dom/client";
import router from './Router/Routes.jsx'
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
);
