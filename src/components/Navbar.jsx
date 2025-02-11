import React, { useState } from 'react'
import Logo from '../assets/Logo.webp'
import {
  Link,
  NavLink,
} from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
const Navbar = () => {

  const [isMenuOpen,setIsMenuOpen]=useState(false);
  const handleToggle=()=>{
    setIsMenuOpen(!isMenuOpen);
  }

  const navItems=[
    {path:'/',title:"Start search"},
    {path:'/myjob',title:"My Jobs"},
    {path:'/salary',title:"Salary Est"},
    {path:'/postjob',title:"Post a Job"}
  ]

  return (
    <header  className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <nav className='flex justify-between items-center py-6'>
        <a href='/' className='flex items-center gap-2 text-2xl'>
          <img  className='w-25'src={Logo} alt="Logo" /><span>Job Portal</span>
        </a>
        {/* Nav items */}
        <ul className='hidden md:flex gap-12'>
          {
            navItems.map(({path,title})=>(
              <li key={path}>
                <NavLink
                    to={path}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    {title}
                  </NavLink>
              </li>
            ))
          }
        </ul>

        <div className='text-base font-medium space-x-5 hidden lg:block'>
          <Link to='/login' className='py-2 px-5 border rounded'>Login</Link>
          <Link to='/signup' className='py-2 px-5 border rounded text-white bg-blue-400'>Sign Up</Link>
        </div>

        {/* mobile view */}
        <div className='md:hidden block'>
          <button onClick={handleToggle}>
            {
              isMenuOpen ? <IoClose className='w-5 h-5 text-primary'/> : <GiHamburgerMenu className='w-5 h-5 text-black'/>
            }
          </button>
        </div>
      </nav>

      {/* navbar items in mobile view */}
      <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "": "hidden"}`}>
        <ul>
        {
            navItems.map(({path,title})=>(
              <li key={path} className='text-base text-white first:text-white py-1'>
                <NavLink
                    to={path}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    {title}
                  </NavLink>
              </li>
            ))
          }
          {/* <li><Link to='/login' className='py-2 px-5 text-white rounded'>Login</Link></li> */}
          <li><Link to='/signup' className='py-2 px-5  rounded text-white bg-blue-400'>Sign Up</Link></li>
        </ul>
      </div>
      
    </header>
  )
}

export default Navbar
