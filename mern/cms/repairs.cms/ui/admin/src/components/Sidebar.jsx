import React from 'react'
import { CgHomeAlt } from 'react-icons/cg'
import { NavLink } from 'react-router'
import { FaBox, FaBuilding, FaGear, FaHouseChimneyWindow, FaNoteSticky } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
const Sidebar = () => {

    const iconCss = {marginTop: "-4px", marginRight: "4px"}

    return (
        <div className='sidebar-links'>
            <NavLink to={'/'}> 
            <FaBox style={iconCss} /> Dashboard
            </NavLink>
            <NavLink to={'/dashboard/home'}>
                <FaHouseChimneyWindow style={iconCss} /> Home
            </NavLink>
            <NavLink to={'/dashboard/about'}>
                <FaBuilding style={iconCss} /> About
            </NavLink>
            <NavLink to={'/dashboard/contact'}>
                <FaUserEdit style={iconCss} /> Contact
            </NavLink>
            <NavLink to={'/dashboard/webpages'}>
                <FaNoteSticky style={iconCss} /> Webpages
            </NavLink>
            <hr/>
            <NavLink to={'/dashboard/settings'}>
                <FaGear style={iconCss} /> Settings
            </NavLink>
        </div>
    )
}

export default Sidebar