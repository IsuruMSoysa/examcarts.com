import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState,useEffect} from 'react';
import {Button, Col, Row, Table} from "react-bootstrap";
import {Link, RouteComponentProps} from "react-router-dom";
import axios from "axios";
import {IAnswersheet, IEvaluatedsheet, Iexamins, IResults} from "../../../../Types/teacherTypes";

function ReleasedResults ({ match }: RouteComponentProps<{}>) {
  const [StudentId] = useState(localStorage.getItem('passedStudentID') || '0');
  const [viewResultsArr,setviewResultsArr] = useState<[IResults]>();

  useEffect(() => {
    getReleasedResults(StudentId);
  }, []);

  const getReleasedResults = (stuId:string) => {
    axios.post('http://localhost:3001/studentreleasedresults', { StudentID : stuId})
      .then(resp => {
        setviewResultsArr(resp.data.items);
        console.log(resp.data.item);
      })
      .catch(err =>{
        alert(err);
      })
  }


  const completdAnswerSheets = () => {
    if (viewResultsArr== null) {
      return;
    }
    else {
      return viewResultsArr.map((e) => {
        return (
          <tr>
            <td >{e.examObjId.examName}</td>
            <td >{e.finalMarks}</td>
            <td className="text-center">
              <Link to={`/dashboard/student/releasedresultsummary/${e._id}`}>
                <Button variant="success">
                  View Summary
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
          <Col className="text-center pt-4 pb-1 my-3">
            <h2>Released Results</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table variant="dark" striped bordered hover size="sm">
              <thead>
              <tr>
                <th>Paper Name</th>
                <th>Marks</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              {completdAnswerSheets()}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ReleasedResults;