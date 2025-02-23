import './index.css'
import React from 'react'
import  ReactDOM from "react-dom/client";
import router from './Router/Routes.jsx'
import { RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router}/>
      {/* <App /> */}
    </ClerkProvider>
  </React.StrictMode>
);
