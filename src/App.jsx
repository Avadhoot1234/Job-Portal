import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { Outlet } from 'react-router-dom'


function App() {
  
  return (
    <>

    <nav>Navbar</nav>
      <Outlet/>
    <footer>Footer</footer>
    </>
  )
}

export default App
