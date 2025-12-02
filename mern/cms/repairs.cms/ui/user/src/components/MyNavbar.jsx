import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { APP_NAME } from '../resources/string.js';
import { NavLink } from 'react-router';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand to="/">
            {APP_NAME}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links me-auto">
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to="/about-us">About us</NavLink>
            <NavLink className="navlink" to="/contact-us">Contact us</NavLink>
          </Nav>
          <div className="justify-content-end">
            <Navbar.Text>
              <a className="btn text-bg-success" href="#login">Action button</a>
            </Navbar.Text>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;