import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "./Logo.png";
import "./styles.css";

const NavBar = (props) => {
  const { noBackground = false, noCollapse = false } = props;
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  const navigation = (path) => {
    switch (path) {
      case 'Home':
        navigate('/');
        break;
      case 'About':
        navigate('/about');
        break;
      case 'Service':
        navigate('/service');
        break;
      case 'Contact':
        navigate('/contact');
        break;
      default:
        navigate('/');
        break;
    }
  }

  return (
    <Navbar
      expand="lg"
      className={noBackground && currentPath === '/' ? "section no-background" : "section"
        + (noCollapse ? " navbar-expand" : "")}
    >
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          alt="Logo"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => navigation('Home')}>Home</Nav.Link>
          <Nav.Link onClick={() => navigation('Service')}>Service</Nav.Link>
          <Nav.Link onClick={() => navigation('About')}>About Us</Nav.Link>
          <Nav.Link onClick={() => navigation('Contact')}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  );
};

export default NavBar;