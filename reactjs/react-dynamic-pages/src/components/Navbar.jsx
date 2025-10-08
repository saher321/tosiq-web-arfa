import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const links = [
        {url: "/", title: "Home"},
        {url: "/blog", title: "Blog"},
        {url: "/users", title: "Users"},
        {url: "/contact-us", title: "Contact us"}
    ]
  return (
    <header>
        <nav className='flex items-center justify-between'>
            <div className='m-4 p-4 bg-white/90 rounded-lg shadow'>Logo</div>
            <ul className='flex gap-4 m-4 p-4 bg-white/90 rounded-lg shadow'>
                { 
                    links.map((link, i)=>{
                        return (
                            <li key={i}>
                                <NavLink
                                    className={(e) => e.isActive ? "text-red-700" : ""} 
                                    to={link.url}>
                                    {link.title}
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    </header>
  )
}

export default Navbar