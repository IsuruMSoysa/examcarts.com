import React from 'react';
import { Button, Nav, Navbar} from "react-bootstrap";
import siteLogo from '../../../../assests/images/logogreen.png'
import "../../../../Views/projectDOM.scss"
import "../Styles/loginNavBar.scss"
import {BrowserRouter as Router,Link} from "react-router-dom";


const loginNavBar: React.FC = () => {

    return (
        <Navbar collapseOnSelect bg="light" className="navLogin m-0 py-3 pl-4" expand="lg">
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

                        <Link to="/admin">
                            <Nav.Link className="NavItem px-1 mx-4" href="/admin">Home</Nav.Link>
                        </Link>
                        <Link to="/createAcc">
                                <Button className="px-4 mx-4 py-2" variant="success"> Create Account </Button>
                        </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default loginNavBar;