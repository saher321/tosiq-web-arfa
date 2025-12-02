import React from 'react'
import { NavLink } from 'react-router'
import { FaBox, FaBuilding, FaGear, FaHouseChimneyWindow, FaNoteSticky } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
const Sidebar = () => {

    const iconCss = {marginTop: "-4px", marginRight: "4px"}

    return (
        <div className='sidebar-links'>
            <NavLink to={'/'} className={({ isActive }) => isActive ?  'active-link' : ''}> 
            <FaBox style={iconCss} /> Dashboard
            </NavLink>
            <NavLink to={'/dashboard/home'} className={({ isActive }) => isActive ?  'active-link' : ''}>
                <FaHouseChimneyWindow style={iconCss} /> Home
            </NavLink>
            <NavLink to={'/dashboard/about'} className={({ isActive }) => isActive ?  'active-link' : ''}>
                <FaBuilding style={iconCss} /> About
            </NavLink>
            <NavLink to={'/dashboard/contact'} className={({ isActive }) => isActive ?  'active-link' : ''}>
                <FaUserEdit style={iconCss} /> Contact
            </NavLink>
            <NavLink to={'/dashboard/webpages'} className={({ isActive }) => isActive ?  'active-link' : ''}>
                <FaNoteSticky style={iconCss} /> Webpages
            </NavLink>
            <hr/>
            <NavLink to={'/dashboard/settings'} className={({ isActive }) => isActive ?  'active-link' : ''}>
                <FaGear style={iconCss} /> Settings
            </NavLink>
        </div>
    )
}

export default Sidebar