import React from 'react';
import { Button, Nav, Navbar} from "react-bootstrap";
import "../../../../Views/projectDOM.scss"
import "../Styles/DashBord.scss"
import {Route, BrowserRouter as Router,Link} from "react-router-dom";
import MyClassesDOM from "../Components/MyClassDOM"


const SideMenu: React.FC = () => {
    return (

        <Nav className="sideMenuItems pl-3  flex-column">
            <Link to="/dashboard" className="navLinkItem p-4">My Classes</Link>
            <Link to="/exams" className="navLinkItem p-4" >Upcoming Exams</Link>
            <Link to="/exams" className="navLinkItem p-4" >My Papers</Link>
            <Link to="/exams" className="navLinkItem p-4" >Release Results</Link>
            <Link to="/exams" className="navLinkItem p-4" >My Revenue</Link>
            <Link to="/exams" className="navLinkItem p-4" >Notifications</Link>
            <Link to="/exams" className="navLinkItem p-4" >Settings</Link>
        </Nav>
    );
}

export default SideMenu;