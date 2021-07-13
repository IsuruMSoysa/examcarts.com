import React, {useState} from 'react';
import {Button, ButtonGroup, InputGroup, Navbar} from "react-bootstrap";
import "../../../../Views/projectDOM.scss"
import "../Styles/DashBord.scss"
import {Route, BrowserRouter as Router,Link} from "react-router-dom";
import MyClassesDOM from "../Components/MyClassDOM"
import {inspect} from "util";
import {Dropdown, Icon, Sidenav,Nav} from 'rsuite';
import "rsuite/dist/styles/rsuite-default.css";


const SideMenuSD: React.FC = () => {


    return (
        // <Nav className="sideMenuItems  flex-column">
        //     <ButtonGroup vertical>
        //         <Button className="navLinkItem p-4">
        //             <Link className="menuLink" to="/dashboard/student">My Classes</Link>
        //         </Button>
        //         <Button className="navLinkItem p-4">
        //             <Link className="menuLink" to="/dashboard/student/addClass"  >Add Class</Link>
        //         </Button>
        //         <Button className="navLinkItem p-4">
        //             <Link to="/exams" className="menuLink" >My Papers</Link>
        //         </Button>
        //         <Button className="navLinkItem p-4">
        //             <Link to="/exams" className="menuLink" >Upcoming Exams</Link>
        //         </Button>
        //         <Button className="navLinkItem p-4">
        //             <Link to="/exams" className="menuLink"  >Results Release</Link>
        //         </Button>
        //         <Button className="navLinkItem p-4">
        //             <Link to="/exams" className="menuLink" >Notifications</Link>
        //         </Button>
        //         <Button className="navLinkItem p-4">
        //             <Link to="/exams"  className="menuLink" >Settings</Link>
        //         </Button>
        //     </ButtonGroup>
        // </Nav>

        <div>
            <Sidenav  style={{backgroundColor:"#3F6844" }} defaultOpenKeys={['3', '4']}>
                <Sidenav.Body>
                    <Nav>
                        <Link  to="/dashboard/student" className="navMenuItem" >
                        <Nav.Item  eventKey="1" >
                                My Classes
                        </Nav.Item>
                        </Link>
                        <Link className="navMenuItem" to="/dashboard/student/addClass"  >
                        <Nav.Item  eventKey="2" >
                           Add Class
                        </Nav.Item>
                        </Link>
                        <Link className="navMenuItem" to="/exams" >
                        <Nav.Item  eventKey="2" >
                            My Papers
                        </Nav.Item>
                        </Link>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </div>
    );
}

export default SideMenuSD;