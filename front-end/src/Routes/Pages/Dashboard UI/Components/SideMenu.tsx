import React from 'react';
import {Button, ButtonGroup, InputGroup, Nav, Navbar} from "react-bootstrap";
import "../../../../Views/projectDOM.scss"
import "../Styles/DashBord.scss"
import {Route, BrowserRouter as Router,Link} from "react-router-dom";

const SideMenu: React.FC = () => {

    return (
        <Nav className="sideMenuItems  flex-column">
            <ButtonGroup vertical>
                    <Button className="navLinkItem p-4">
                        <Link className="menuLink" to="/dashboard">My Classes</Link>
                    </Button>
                    <Button className="navLinkItem p-4">
                        <Link className="menuLink" to="/enrollmentRequests"  >Enrollment Requests</Link>
                    </Button>
                    <Button className="navLinkItem p-4">
                        <Link className="menuLink" to="/exams"  >Upcoming Exams</Link>
                    </Button>
                    <Button className="navLinkItem p-4">
                        <Link to="/dashboard/mypapers" className="menuLink" >My Papers</Link>
                    </Button>
                    <Button className="navLinkItem p-4">
                        <Link to="/dashboard/examschedule" className="menuLink" >Schedule Exam</Link>
                    </Button>
                    <Button className="navLinkItem p-4">
                        <Link to="/exams" className="menuLink" >Release Results</Link>
                    </Button>
                    <Button className="navLinkItem p-4">
                        <Link to="/exams" className="menuLink"  >My Revenue</Link>
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

export default SideMenu;