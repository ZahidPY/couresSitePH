import React from 'react';
import logo from '../../Images/logo.png';
import './Header.css';
import { Navbar, Nav } from 'react-bootstrap';


const Header = () => {
    return (
        <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home" className="ml-2 logo"><img class="logo" src={logo} alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto mr-5">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#account">Create An Account</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div >
    );
};

export default Header;
