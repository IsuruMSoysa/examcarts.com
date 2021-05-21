import React, { useState } from 'react';
import {Alert, Button, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import siteLogo from '../../../../assests/images/logogreen.png'
import "../Styles/NavBarComp.scss"


const NavbarComp: React.FC = () => {
    const [show, setShow] = useState(true);

    return (
        <Navbar collapseOnSelect bg="light" className="m-0 py-3 pl-4" expand="lg">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={siteLogo}
                    width="auto"
                    height="40"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navMenuItems ml-auto pr-4">
                    <Nav.Link className="NavItem px-1 mx-4" href="#home">Home</Nav.Link>
                    <Nav.Link className="NavItem px-1 mx-4" href="#features">About Us</Nav.Link>
                    <Nav.Link className="NavItem px-1 mx-4" href="#features">Features</Nav.Link>
                    <Nav.Link className="NavItem px-1 mx-4" href="#pricing">Contact Us</Nav.Link>

                    <Button className="px-4 mx-4" variant="success"> Log In </Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComp;