import React, {FormEvent, useEffect, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Link, RouteComponentProps} from "react-router-dom";
import {Button, Col, Form, Row} from "react-bootstrap";
import {IAnswersheet, Iexamins} from "../../../../Types/teacherTypes";
import axios from "axios";

function ViewAnswer({ match }: RouteComponentProps<{}>) {
  const [viewAnswerDetails,setViewAnswerDetails] = useState<IAnswersheet>();
  const [examIdView,setExamIdView] = useState<string>('');
  const [finalMarks,setFinalMarks] = useState<string>('');
  const [markingFinished,setMrkingFinished] = useState<boolean>(false);
  const [instructorID] = useState(localStorage.getItem('passedInstructorID') || '0');


  useEffect(() => {
    let paramsID = JSON.stringify(match.params);
    let examIdViewV = (JSON.parse(paramsID)).id;
    setExamIdView(examIdViewV);
    getStudentAnswerSheet(examIdViewV);
  }, []);

  const getFinalMarks = (name: string) => {
    setFinalMarks(name);
  }

  const getStudentAnswerSheet = (examIdViewR:string) => {
    axios.post('http://localhost:3001/getstudentanswersheet', { answerObjId : examIdViewR})
      .then(resp => {
        setViewAnswerDetails(resp.data.items);
        console.log(resp.data.items)
      })
      .catch(err =>{
        alert(err);
      })
  }

  const handlePushMarks = (event:FormEvent) => {
    event.preventDefault();
    setMrkingFinished(true);
    pushFinalMarks(examIdView);
  }

  const pushFinalMarks = (examIdViewR:string) => {
    axios.post('http://localhost:3001/pushfinalmarks',
      { answerObjId : examIdViewR, instructorId:instructorID,finalMarks: finalMarks })
      .then(resp => {
        // setViewAnswerDetails(resp.data.items);
        console.log(resp.data.items)
      })
      .catch(err =>{
        alert(err);
      })
  }

  return (
    <Row className="classItemsContainer">
      <Col>
        <Row>
          <Col className="text-center py-4">
            <h2>Student Name : {viewAnswerDetails?.studentObjId.fullName}</h2>
          </Col>
        </Row>
        <Row>
          <Col className="text-right col-2">
            <h4>Final Marks : </h4>
          </Col>
          <Col className="col-6">
            <Form>
              <Form.Group className="text-center" as={Col} md="4" controlId="validationCustom01">
                <Form.Control
                  required
                  type="text"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                     getFinalMarks(event.target.value)
                  }
                />
              </Form.Group>
            </Form>
          </Col>
          <Col className="col-4 text-left pt-2 pb-4">
            {markingFinished?
              <h4>Paper Pushed successfully</h4>:
              <Button className="px-4 mx-4"  type="submit"
                      onClick={handlePushMarks}
                      variant="success"><b>Push as a evaluated answer sheet</b>
              </Button>}
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <object data={viewAnswerDetails?.answersheetUrl} type="application/pdf" width="95%" height="500%">
              <p><a href={viewAnswerDetails?.answersheetUrl}>If failed to load PDF click here!</a></p>
            </object>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ViewAnswer;