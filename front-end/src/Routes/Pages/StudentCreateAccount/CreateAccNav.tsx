import React from 'react';
import { Button, Nav, Navbar} from "react-bootstrap";
import siteLogo from '../../../../src/assests/images/logogreen.png';
import "../../../../src/Views/projectDOM.scss";
import "../../Pages/Landing Page/Styles/NavBarComp.scss";


const CreateAccNav: React.FC = () => {

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
        </Navbar>
    );
}

export default CreateAccNav;