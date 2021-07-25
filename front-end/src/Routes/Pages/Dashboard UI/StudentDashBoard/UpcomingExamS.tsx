import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Fragment, useState,useEffect} from 'react';
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import {Link, RouteComponentProps} from "react-router-dom";
import axios from "axios";
import {IenrollmentRequestTable, Iexam} from "../../../../Types/teacherTypes";

function UpcomingExamsS ({ match }: RouteComponentProps<{}>) {
  const [studentID] = useState(localStorage.getItem('passedStudentID') || '0');
  const [scheExamObj,setscheExamObj] = useState<[Iexam]| null>();

  useEffect(() => {
    getUpcomingExamsS();
  }, []);

  const getUpcomingExamsS = () => {
    let upcomingClassesS = {studentIdNum: studentID};
    axios.post("http://localhost:3001/upcomingstuexmas",upcomingClassesS)
      .then(resp => {
        setscheExamObj(resp.data.upcomingexams);
      })
      .catch(err =>{
        alert(err);
      })
  }


  const showUpcomingExams = () => {
    if (scheExamObj== null) {
      return;
    }
    else {
      return scheExamObj.map((e) => {

        return (
          <tr>
            <td>{e.examName}</td>
            <td>{e.startTime}</td>
            <td>{e.classObjId.className}</td>
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
            <h2>Upcoming Exams</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped bordered hover size="sm">
              <thead>
              <tr>
                <th>Exam Name</th>
                <th>Scheduled Time</th>
                <th>Class</th>
              </tr>
              </thead>
              <tbody>
              {showUpcomingExams()}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Col>
    </Row>

  );
}

export default UpcomingExamsS;
