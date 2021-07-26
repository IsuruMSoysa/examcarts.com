import React, {useEffect, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Button, Col, Row, Table} from "react-bootstrap";
import {Link, RouteComponentProps} from "react-router-dom";
import axios from "axios";
import {ITeacherDetails} from "../../../../Types/teacherTypes";

function TeacherConnection({ match }: RouteComponentProps<{}>) {

  const [instructID] = useState(localStorage.getItem('passedInstructorID') || '0');
  const [enrollmentObj,setenrollmentObj] = useState<[ITeacherDetails]| null>();
  const [emptyTable,setEmptyTable] = useState<boolean>(true);

  useEffect(() => {
    getAllTeacherRequests();
  }, []);

  const getAllTeacherRequests = () => {
    let teacherReq = {instructorIdNum: instructID};
    axios.post("http://localhost:3001/getteacherrequests",teacherReq)
      .then(resp => {
        console.log(resp.data.teacherRequests);
        setenrollmentObj(resp.data.teacherRequests);
      })
      .catch(err =>{
        alert(err);
      })
  }

  const showEnrollmentRequests = () => {
    if (enrollmentObj== null) {
      return;
    }
    else {
      return enrollmentObj.map((e) => {
        return (
          <tr>
            <td>{e.fullName}</td>
            <td>{e.mobile}</td>
            <td>{e.email}</td>
            <td>
              <Row>
                <Col className="text-center">
                  <Link to={`/dashboard/instructor/conncetedteachers/${e._id}`}>
                    <Button className="px-4"
                            variant="success">Accept
                    </Button>
                  </Link>
                </Col>
              </Row>
            </td>
          </tr>
        );
      })
    }
  }


  return (
    <Row className="classItemsContainer mx-4 my-4 py-1 p-4 ">
      <Col>
        <Row>
          <Col className="text-center py-1 my-3">
            <h2>Teacher Connection Requests</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover size="sm">
              <thead>
              <tr>
                <th>Teacher Name</th>
                <th>Mobile No</th>
                <th>E mail</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              {showEnrollmentRequests()}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          {emptyTable ?
          <Col className="text-center">
            <h5>No Pending Teacher Connection Requests</h5>
          </Col> : null}
        </Row>
      </Col>

    </Row>
  );
}

export default TeacherConnection;
