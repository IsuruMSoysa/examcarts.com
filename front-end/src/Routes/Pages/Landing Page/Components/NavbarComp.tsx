import React from 'react';
import { Link} from "react-router-dom";
import {Button, Nav, Navbar} from "react-bootstrap";
import siteLogo from '../../../../assests/images/logogreen.png'
import "../../../../Views/projectDOM.scss"
import "../Styles/NavBarComp.scss"

const NavbarComp: React.FC = () => {
    return (
        <Navbar collapseOnSelect bg="light" className="navMain m-0 py-3 pl-4" expand="lg">
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
                        <Link className="NavItem px-1 mx-4 py-3" to="/">Home</Link>
                        <Link className="NavItem px-1 mx-4 py-3" to="/aboutUs">About Us</Link>
                        <Link className="NavItem px-1 mx-4 py-3" to="/features">Features</Link>
                        <Link className="NavItem px-1 mx-4 py-3" to="/contactUs">Contact Us</Link>
                        <Link to="/login">
                            <Nav.Link className="py-2" href="/login">
                                <Button className="px-4 mx-4"  variant="success"> Log In </Button>
                            </Nav.Link>
                        </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComp;