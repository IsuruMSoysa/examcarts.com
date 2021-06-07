import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";
import DashBoardNav from "./DashBoardNav";
import SideMenu from "./SideMenu";
import Footer from "../../Landing Page/Components/Footer";
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import MyClassDOM from "./MyClassDOM";
import UpcomingExams from "./UpcomingExams";
import CreateClass from "./CreateClass";

const DashBoardDOM: React.FC = () => {
    return (
        <Container fluid className="dashBordDOM p-0 m-0">
            <Router>
                <Row>
                    <Col className="p-0 m-0">
                        <DashBoardNav/>
                    </Col>
                </Row>
                <Row className="dashDetailsRow bg-light p-0 m-0">
                    <Col  lg="2"  className= "sideMenu pl-0  ">
                        <SideMenu/>
                        {/*<Nav className="sideMenuItems pl-3  flex-column">*/}
                        {/*    <Link to="/myClasses" className="navLinkItem p-4">My Classes</Link>*/}
                        {/*    <Nav.Link className="navLinkItem p-4" >Upcoming Exams</Nav.Link>*/}
                        {/*    <Nav.Link className="navLinkItem p-4" >My Papers</Nav.Link>*/}
                        {/*    <Nav.Link className="navLinkItem p-4" >Release Results</Nav.Link>*/}
                        {/*    <Nav.Link className="navLinkItem p-4" >My Revenue</Nav.Link>*/}
                        {/*    <Nav.Link className="navLinkItem p-4" >Notifications</Nav.Link>*/}
                        {/*    <Nav.Link className="navLinkItem p-4" >Settings</Nav.Link>*/}
                        {/*</Nav>*/}
                    </Col>
                    <Col className="bg-light pt-1 m-0">
                            {/*<Switch>*/}
                            {/*    <Route exact  path="/" component={MyClassDOM}> </Route>*/}
                            {/*    <Route exact  path="/exams" component={UpcomingExams}> </Route>*/}
                            {/*</Switch>*/}
                            <Switch>
                                <Route exact path="/dashboard" component={MyClassDOM}/>
                                <Route path="/dashboard/createClass" component={CreateClass}/>
                            </Switch>

                        </Col>
                </Row>
                <Row>
                    <Col>
                        <Footer/>
                    </Col>
                </Row>
            </Router>
        </Container>

    );
}

export default DashBoardDOM;