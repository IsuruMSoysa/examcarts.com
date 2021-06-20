import React from 'react';
import {Button, ButtonGroup, InputGroup, Nav, Navbar} from "react-bootstrap";
import "../../../../Views/projectDOM.scss"
import "../Styles/DashBord.scss"
import {Route, BrowserRouter as Router,Link} from "react-router-dom";
import MyClassesDOM from "../Components/MyClassDOM"
import {inspect} from "util";

const SideMenuSD: React.FC = () => {

    return (
        <Nav className="sideMenuItems  flex-column">
            <ButtonGroup vertical>
                <Button className="navLinkItem p-4">
                    <Link className="menuLink" to="/dashboard/student">My Classes</Link>
                </Button>
                <Button className="navLinkItem p-4">
                    <Link className="menuLink" to="/dashboard/student/addClass"  >Add Class</Link>
                </Button>
                <Button className="navLinkItem p-4">
                    <Link to="/exams" className="menuLink" >My Papers</Link>
                </Button>
                <Button className="navLinkItem p-4">
                    <Link to="/exams" className="menuLink" >Upcoming Exams</Link>
                </Button>
                <Button className="navLinkItem p-4">
                    <Link to="/exams" className="menuLink"  >Results Release</Link>
                </Button>
                <Button className="navLinkItem p-4">
                    <Link to="/exams" className="menuLink" >Notifications</Link>
                </Button>
                <Button className="navLinkItem p-4">
                    <Link to="/exams"  className="menuLink" >Settings</Link>
                </Button>
            </ButtonGroup>
        </Nav>
    );
}

export default SideMenuSD;