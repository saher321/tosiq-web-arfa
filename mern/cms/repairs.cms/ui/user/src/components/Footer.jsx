import React from 'react'
import { APP_NAME } from '../resources/string.js';
import { Container, NavLink } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='text-center'>
        <Container fluid="md">
            <h3>{APP_NAME}</h3>
            <ul className='footer-links'>
                <li><NavLink>Privacy Policy</NavLink></li>
                <li><NavLink>Terms & Condition</NavLink></li>
                <li><NavLink>Help Desk</NavLink></li>
            </ul>
            <hr />
            <div className='copyright'>
                <div>
                    &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
                </div>
                <div className='social-icons'>
                    <FaFacebook size={24} />   
                    <FaInstagram size={24} />
                    <FaLinkedin size={24} />
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer