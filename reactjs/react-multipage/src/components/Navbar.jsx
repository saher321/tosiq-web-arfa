import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/blog'>Blog</NavLink>
                </li>
                <li>
                    <NavLink to='/contact-us'>Contact Us</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar