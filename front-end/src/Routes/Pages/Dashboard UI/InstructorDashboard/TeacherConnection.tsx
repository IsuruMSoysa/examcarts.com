import React, {FormEvent, useEffect, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Button, Col, Form, InputGroup, Row, Table} from "react-bootstrap";
import {Link, RouteComponentProps} from "react-router-dom";
import axios from "axios";
import {IenrollmentRequestTable} from "../../../../Types/teacherTypes";

function TeacherConnection({ match }: RouteComponentProps<{}>) {

  const [teacherID,setTeacherID] = useState(localStorage.getItem('passedTeacherID') || '0');
  const [enrollmentObj,setenrollmentObj] = useState<[IenrollmentRequestTable]| null>();

  // useEffect(() => {
  //   getAllEnrollmentRequests();
  // }, []);
  //
  //
  // const getAllEnrollmentRequests = () => {
  //   let teacherClassReq = {teacherIdNum: teacherID};
  //   axios.post("http://localhost:3001/getenrollmentrequests",teacherClassReq)
  //     .then(resp => {
  //       console.log(resp.data.items);
  //       setenrollmentObj(resp.data.items);
  //     })
  //     .catch(err =>{
  //       alert(err);
  //     })
  // }


  const showEnrollmentRequests = () => {
    if (enrollmentObj== null) {
      return;
    }
    else {
      return enrollmentObj.map((e) => {

        return (
          <tr>
            <td>{e.firstName} {e.lastName}</td>
            <td>{e.classId.className}</td>
            <td>{e.UploadedTime}</td>
            <td>
              <Row>
                <Col className="text-center">
                  <Link to={`/dashboard/viewRequest/${e._id}`}>
                    <Button className="px-4"
                            variant="success">View
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
                <th>E-mail</th>
                <th>Time</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              {showEnrollmentRequests()}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Col>

    </Row>
  );
}

export default TeacherConnection;
