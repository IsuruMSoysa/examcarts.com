import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState,useEffect} from 'react';
import {Button, Col, Row, Table} from "react-bootstrap";
import {Link, RouteComponentProps} from "react-router-dom";
import axios from "axios";
import {Iexamins} from "../../../../Types/teacherTypes";

function PaperToMark ({ match }: RouteComponentProps<{}>) {
  const [instructorID] = useState(localStorage.getItem('passedInstructorID') || '0');
  const [finishedExamObj,setFinishedExamObj] = useState<[Iexamins]| null>();

  useEffect(() => {
    getExamsFinished();
  }, []);

  const getExamsFinished = () => {
    let finishedExams = {instructorIdNum: instructorID};
    axios.post("http://localhost:3001/finishedexams",finishedExams)
      .then(resp => {
        setFinishedExamObj(resp.data.examArr);
      })
      .catch(err =>{
        alert(err);
      })
  }

  const showUpcomingExams = () => {
    if (finishedExamObj== null) {
      return;
    }
    else {
      return finishedExamObj.map((e) => {

        return (
          <tr>
            <td >{e.examName}</td>
            <td>{e.endTime}</td>
            <td>{e.classObjId.className}</td>
            <td>{e.teacherID.fullName}</td>
            <td className="text-center">
              <Link to={`/dashboard/instructor/answersheetlist/${e._id}`}>
                <Button variant="success">
                 View Papers
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
            <h2>Exams To Mark</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table variant="dark" striped bordered hover size="sm">
              <thead>
              <tr>
                <th >Exam Name</th>
                <th>Finished Time</th>
                <th>Class</th>
                <th>Teacher Name</th>
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

export default PaperToMark;
