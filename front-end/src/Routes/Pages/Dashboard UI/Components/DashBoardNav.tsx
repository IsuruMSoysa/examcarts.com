import React, {useEffect} from 'react';
import { Button, Nav, Navbar} from "react-bootstrap";
import siteLogo from '../../../../assests/images/logoWhite.webp'
import "../../../../Views/projectDOM.scss"
import "../Styles/DashBord.scss"
import {BrowserRouter as Router,Link} from "react-router-dom";


const DashBoardNav: React.FC = () => {

    return (
        <Navbar collapseOnSelect className="navLogin m-0 py-2 pl-4" expand="lg">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src={siteLogo}
                    width="210"
                    height="auto"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navMenuItems ml-auto pr-4">
                    <Link to="/login">
                        <Nav.Link className="py-2" href="/login">
                            <Button className="logoutBtn px-4 mx-4" > Logout </Button>
                        </Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default DashBoardNav;