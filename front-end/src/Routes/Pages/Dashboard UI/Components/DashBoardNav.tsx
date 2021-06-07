import React, {useEffect} from 'react';
import { Button, Nav, Navbar} from "react-bootstrap";
import siteLogo from '../../../../assests/images/logoWhite.webp'
import "../../../../Views/projectDOM.scss"
import "../Styles/DashBord.scss"
import {BrowserRouter as Router, Link, useHistory} from "react-router-dom";


const DashBoardNav: React.FC = () => {
    const history = useHistory();

    const logoutBtnClicked = () =>{
        history.push('/login');
        window.location.reload();
    }

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
                    <Link to="/login" className="py-2">
                            <Button className="logoutBtn px-4 mx-4" onClick={logoutBtnClicked} > Logout </Button>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default DashBoardNav;