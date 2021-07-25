import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Route, BrowserRouter as Router, Switch, RouteComponentProps} from "react-router-dom";
import DashBoardNavI from "./DashboardNavI";
import SideMenuI from "./SideMenuI";
import TeacherConnection from "./TeacherConnection";
import ConnectedTeachers from "./ConnectedTeachers";
import UpcomingExamsI from "./UpcomingExamI";



const IDashboardDOM: React.FC = () => {

  return (
    <Container fluid className="dashBordDOM p-0 m-0">
      <Router>
        <Row>
          <Col className="p-0 m-0">
            <DashBoardNavI/>
          </Col>
        </Row>
        <Row className="dashDetailsRow bg-light p-0 m-0">
          <Col  lg="2"  className= "sideMenu pl-0">
            <SideMenuI/>
          </Col>
          <Col className="bg-light pt-1 m-0">
            <Switch>
              <Route
                exact path="/dashboard/instructor/teacherconnection"
                render={(props: RouteComponentProps<{}>) => (
                  <TeacherConnection{...props}/>
                )}/>
              <Route
                exact path="/dashboard/instructor/conncetedteachers/:id"
                render={(props: RouteComponentProps<{}>) => (
                  <ConnectedTeachers{...props}/>
                )}/>
              <Route
                exact path="/dashboard/instructor/conncetedteachers"
                render={(props: RouteComponentProps<{}>) => (
                  <ConnectedTeachers{...props}/>
                )}/>
              <Route
                exact path="/dashboard/instructor/upcomingexam"
                render={(props: RouteComponentProps<{}>) => (
                  <UpcomingExamsI{...props}/>
                )}/>
            </Switch>
          </Col>
        </Row>
      </Router>
    </Container>

  );
}

export default IDashboardDOM;