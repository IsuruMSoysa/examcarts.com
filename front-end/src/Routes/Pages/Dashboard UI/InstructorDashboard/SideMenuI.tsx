import React from 'react';
import {Button, ButtonGroup, Nav} from "react-bootstrap";
import "../../../../Views/projectDOM.scss"
import "../Styles/DashBord.scss"
import {Link} from "react-router-dom";

const SideMenu: React.FC = () => {

  return (
    <Nav className="sideMenuItems  flex-column">
      <ButtonGroup vertical>
        <Button className="navLinkItem p-4">
          <Link className="menuLink" to="/dashboard/instructor">Exams to Mark</Link>
        </Button>
        <Button className="navLinkItem p-4">
          <Link className="menuLink" to="/dashboard/instructor/teacherconnection">Teacher Requests</Link>
        </Button>
        {/*<Button className="navLinkItem p-4">*/}
        {/*  <Link className="menuLink" to="/enrollmentRequests"  >Enrollment Requests</Link>*/}
        {/*</Button>*/}
        <Button className="navLinkItem p-4">
          <Link className="menuLink" to="/dashboard/instructor/conncetedteachers">Connected Teachers</Link>
        </Button>
        <Button className="navLinkItem p-4">
          <Link className="menuLink" to="/dashboard/instructor/upcomingexam"  >Upcoming Exams</Link>
        </Button>

      </ButtonGroup>
    </Nav>
  );
}

export default SideMenu;