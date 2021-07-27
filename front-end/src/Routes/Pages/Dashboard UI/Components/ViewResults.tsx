import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState,useEffect} from 'react';
import {Button, Col, Row, Table} from "react-bootstrap";
import {Link, RouteComponentProps} from "react-router-dom";
import axios from "axios";
import {IAnswersheet, IEvaluatedsheet, Iexamins} from "../../../../Types/teacherTypes";

function ViewPapersList ({ match }: RouteComponentProps<{}>) {
  const [TeacheraID] = useState(localStorage.getItem('passedTeacherID') || '0');
  const [viewAnswerArr,setviewAnswerArr] = useState<[IAnswersheet]>();
  const [viewCompletedArr,setviewCompletedArr] = useState<[IEvaluatedsheet]>();
  const [examIdView,setExamIdView] = useState<string>('');

  useEffect(() => {
    let paramsID = JSON.stringify(match.params);
    let examIdViewV = (JSON.parse(paramsID)).id;
    setExamIdView(examIdViewV);
    getAnswerSheetsDetail(examIdViewV);
  }, []);

  const getAnswerSheetsDetail = (examIdViewR:string) => {
    axios.post('http://localhost:3001/getexamanswerlist', { examObjId : examIdViewR})
      .then(resp => {
        setviewAnswerArr(resp.data.items);
        setviewCompletedArr(resp.data.completed);
        console.log(resp.data.message);
      })
      .catch(err =>{
        alert(err);
      })
  }

  const showAnswerList = () => {
    if (viewAnswerArr== null) {
      return;
    }
    else {
      return viewAnswerArr.map((e) => {
        return (
          <tr>
            <td >{e.studentObjId.fullName}</td>
            <td className="text-center">
              <Link to={`/dashboard/instructor/viewanswer/${e._id}`}>
                <Button variant="success">
                  View Answer Sheet
                </Button>
              </Link>
            </td>
          </tr>
        );
      })
    }
  }

  const completdAnswerSheets = () => {
    if (viewCompletedArr== null) {
      return;
    }
    else {
      return viewCompletedArr.map((e) => {
        return (
          <tr>
            <td >{e.studentObjId.fullName}</td>
            <td >{e.finalMarks}</td>
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
            <h2>Answered Student List</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table variant="dark" striped bordered hover size="sm">
              <thead>
              <tr>
                <th >Student Name</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              {showAnswerList()}
              </tbody>
            </Table>
          </Col>
        </Row>

        <Row>
          <Col className="text-center pt-4 pb-1 my-3">
            <h2>Evaluated Papers</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table variant="dark" striped bordered hover size="sm">
              <thead>
              <tr>
                <th>Student Name</th>
                <th>Marks</th>
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

export default ViewPapersList;