import React, {useEffect, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Link, RouteComponentProps} from "react-router-dom";
import {Button, Col, Form, Row} from "react-bootstrap";
import { Iexamins} from "../../../../Types/teacherTypes";
import axios from "axios";

function ViewExamDetails({ match }: RouteComponentProps<{}>) {
  const [viewExamDetails,setViewExamDetails] = useState<Iexamins>();
  const [examIdView,setExamIdView] = useState<string>('');

  useEffect(() => {
    let paramsID = JSON.stringify(match.params);
    let examIdViewV = (JSON.parse(paramsID)).id;
    setExamIdView(examIdViewV);
    getViewClassDetailSD(examIdViewV);
  }, []);

  const getViewClassDetailSD = (examIdViewR:string) => {
    axios.post('http://localhost:3001/getexampaperdetails', { examObjId : examIdViewR})
      .then(resp => {
        setViewExamDetails(resp.data.items);
        console.log(resp.data.items)
      })
      .catch(err =>{
        alert(err);
      })
  }

  return (
    <Row className="classItemsContainer mx-4 my-4 py-1 p-4 ">

      <Col className=" text-center m-4 p-0">
        <Form>
          <div className="pb-4 pt-0">
            <h2><b>Exam Details</b></h2><br/><br/>
            <p>Exam Name : {viewExamDetails?.examName}</p>
            <p>Class Name : {viewExamDetails?.classObjId.className}</p>
            <p>Teacher Name : {viewExamDetails?.teacherID.fullName}</p><br/><br/>
            <h4>Start time : {viewExamDetails?.startTime}</h4>
            <h4>Answer Submission Deadline : {viewExamDetails?.endTime}</h4>
            <h4>Time Allocate to answer : {viewExamDetails?.paperObjId.hours} hours and {viewExamDetails?.paperObjId.minutes} minutes</h4>
            <h4>Full Marks : {viewExamDetails?.paperObjId.finalMarks} </h4>
          </div>


          <Row>
            <Col className="text-center">
                <Link to={`/dashboard/student/attemptexam/${examIdView}`}>
                {/*<Link to="/dashboard/student/addclass">*/}
                  <Button className="px-4 mx-4"  type="submit"
                          variant="success"><b>Attempt Now</b>
                  </Button>
              </Link>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default ViewExamDetails;
