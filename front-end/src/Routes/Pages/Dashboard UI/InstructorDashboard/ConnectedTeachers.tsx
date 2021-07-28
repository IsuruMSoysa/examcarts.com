import React, {useEffect, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Col, Row, Table} from "react-bootstrap";
import { RouteComponentProps} from "react-router-dom";
import axios from "axios";
import {ITeacherDetails} from "../../../../Types/teacherTypes";
import {Notification} from "rsuite";

function ConnectedTeachers({ match }: RouteComponentProps<{}>) {

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
        alertError(err);
      })
  }

  //alert declaration
  const alertError = (err:string) => {
    Notification.error({
      title: 'Something went wrong!',
      description: err,
      duration:3500
    });
  }


  const getConnectedTeachers = () => {
    let teacherReq = {instructorIdNum: instructorID};
    axios.post("http://localhost:3001/getconnectedteachers",teacherReq)
      .then(resp => {
        setTeachersArr(resp.data.teachers);
      })
      .catch(err =>{
        alertError(err);
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
            <Table variant="dark" striped bordered hover size="sm">
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
