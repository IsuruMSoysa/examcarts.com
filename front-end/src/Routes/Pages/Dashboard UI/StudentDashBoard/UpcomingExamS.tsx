import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState,useEffect} from 'react';
import {Button, Col, Row, Table} from "react-bootstrap";
import {Link, RouteComponentProps} from "react-router-dom";
import axios from "axios";
import {Iexam} from "../../../../Types/teacherTypes";
import {Notification} from "rsuite";

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
            <td>{e.examName}</td>
            <td>{e.startTime}</td>
            <td>{e.classObjId.className}</td>
            <td className="text-center">
              <Link to={`/dashboard/student/viewexam/${e._id}`}>
                <Button variant="success">
                  Answer Now
                </Button>
              </Link>
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
                <th></th>
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
