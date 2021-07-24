import React, {FormEvent, useEffect, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Button, Col, Form, InputGroup, Row, Table} from "react-bootstrap";
import {Link, RouteComponentProps} from "react-router-dom";
import axios from "axios";
import {IenrollmentRequestTable, IInstructorDetails, ITeacherDetails} from "../../../../Types/teacherTypes";

function ConnectedTeachers({ match }: RouteComponentProps<{}>) {

  const [receiptDecision,setReceiptDecision] = useState<string>('');
  const [teachersArr,setTeachersArr] = useState<[ITeacherDetails]>();
  const [instructorID] = useState(localStorage.getItem('passedInstructorID') || '0');

  useEffect(() => {
    let paramsID = JSON.stringify(match.params);
    let reqIdViewV = (JSON.parse(paramsID)).id;
    if(reqIdViewV){
      addTeacher(reqIdViewV);
    }
    getConnectedTeachers();
  }, []);

  const addTeacher = (reqIdViewR:string) => {
    axios.post('http://localhost:3001/connectinstructorteacher',
      { teacherObjId : reqIdViewR, instructorObjID : instructorID})
      .then(resp => {
        // setViewRequestDetails(resp.data.items);
        console.log(resp.data.message)
      })
      .catch(err =>{
        alert(err);
      })
  }


  const getConnectedTeachers = () => {
    let teacherReq = {instructorIdNum: instructorID};
    axios.post("http://localhost:3001/getconnectedteachers",teacherReq)
      .then(resp => {
        console.log(resp.data.teachers);
        setTeachersArr(resp.data.teachers);
      })
      .catch(err =>{
        alert(err);
      })
  }


  const showEnrollmentRequests = () => {
    if (teachersArr== null) {
      return;
    }
    else {
      return teachersArr.map((e) => {

        return (
          <tr>
            <td>{e.fullName}</td>
            <td>{e.mobile}</td>
            <td>{e.email}</td>
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
            <h2>Connected Teachers</h2>
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

export default ConnectedTeachers;
