import React from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import "../../../../Views/projectDOM.scss"
import "../Styles/DashBord.scss"
import {Link} from "react-router-dom";
import {Nav} from 'rsuite';
import "rsuite/dist/styles/rsuite-default.css";


const SideMenuSD: React.FC = () => {


    return (
      <Nav className="sideMenuItems pl-3 flex-column">
          <ButtonGroup vertical>
              <Button className="navLinkItem p-4">
                  <Link className="menuLink" to="/dashboard/student"> My Classes</Link>
              </Button>
              <Button className="navLinkItem p-4">
                  <Link className="menuLink" to="/dashboard/student/addClass"> Add Class</Link>
              </Button>
              <Button className="navLinkItem p-4">
                  <Link className="menuLink" to="/dashboard/student/upcomingexam"> Upcoming Exams</Link>
              </Button>     <Button className="navLinkItem p-4">
                  <Link className="menuLink" to="/dashboard/student/resultsrelease"> Results Release</Link>
              </Button>
              <Button className="navLinkItem p-4">
                  <Link className="menuLink" to="/dashboard/student/analysis">Analysis</Link>
              </Button>
          </ButtonGroup>
      </Nav>
    );
}

export default SideMenuSD;