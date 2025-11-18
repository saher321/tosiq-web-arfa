import React from 'react'
import { APP_NAME } from '../resources/string.js';
import { Container, NavLink } from 'react-bootstrap';

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
        </Container>
    </footer>
  )
}

export default Footer