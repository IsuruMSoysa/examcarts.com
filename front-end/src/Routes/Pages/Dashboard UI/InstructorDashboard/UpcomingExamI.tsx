import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState,useEffect} from 'react';
import {Col, Row, Table} from "react-bootstrap";
import { RouteComponentProps} from "react-router-dom";
import axios from "axios";
import {Iexamins} from "../../../../Types/teacherTypes";
import {Notification} from "rsuite";

function UpcomingExamsI ({ match }: RouteComponentProps<{}>) {
  const [instructorID] = useState(localStorage.getItem('passedInstructorID') || '0');
  const [scheExamObj,setscheExamObj] = useState<[Iexamins]| null>();

  useEffect(() => {
    getUpcomingExamsI();
  }, []);

  const getUpcomingExamsI = () => {
    let upcomingClassesI = {instructorIdNum: instructorID};
    axios.post("http://localhost:3001/upcomingstuexmains",upcomingClassesI)
      .then(resp => {
        setscheExamObj(resp.data.upcomingexami);
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

  const showUpcomingExams = () => {
    if (scheExamObj== null) {
      return;
    }
    else {
      return scheExamObj.map((e) => {

        return (
          <tr>
            <td >{e.examName}</td>
            <td>{e.startTime}</td>
            <td>{e.classObjId.className}</td>
            <td>{e.teacherID.fullName}</td>
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
                <th >Exam Name</th>
                <th>Scheduled Time</th>
                <th>Class</th>
                <th>Teacher Name</th>
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

export default UpcomingExamsI;
