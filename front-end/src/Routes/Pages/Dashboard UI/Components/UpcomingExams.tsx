import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState,useEffect} from 'react';
import { Col, Row, Table} from "react-bootstrap";
import {RouteComponentProps} from "react-router-dom";
import axios from "axios";
import {Iexam} from "../../../../Types/teacherTypes";

function UpcomingExams ({ match }: RouteComponentProps<{}>) {
  const [teacherID] = useState(localStorage.getItem('passedTeacherID') || '0');
  const [scheExamObj,setscheExamObj] = useState<[Iexam]| null>();

  useEffect(() => {
    getUpcomingExams();
  }, []);


  const getUpcomingExams = () => {
    let teacherClassReq = {teacherIdNum: teacherID};
    axios.post("http://localhost:3001/upcomingexmas",teacherClassReq)
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
            <td>{e.paperObjId.paperName}</td>
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
            <Table variant="dark" striped bordered hover size="sm">
              <thead>
              <tr>
                <th>Exam Name</th>
                <th>Scheduled Time</th>
                <th>Class</th>
                <th>Paper</th>
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

export default UpcomingExams;
