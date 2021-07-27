import React, { useEffect, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Link, RouteComponentProps} from "react-router-dom";
import {Button, Col, Row} from "react-bootstrap";
import {Iexamins} from "../../../../Types/teacherTypes";
import axios from "axios";


function PaperAttempt({ match }: RouteComponentProps<{}>) {
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
    <Row className="classItemsContainer">
      <Col>
        <Row>
          <Col className="text-center pt-4">
            <h3>{viewExamDetails?.examName}</h3>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-4">
            <h4>Submit Answers before : {viewExamDetails?.endTime}</h4>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-2">
            <p>Please click this option after you ready with answer document in PDF</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center pt-2 pb-4">
            <Link to={`/dashboard/student/uploadanswers/${examIdView}`}>
              <Button className="px-4 mx-4"  type="submit"
                      variant="success"><b>Upload Answers</b>
              </Button></Link>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <object data={viewExamDetails?.paperObjId.paperUrl} type="application/pdf" width="95%" height="500%">
              <p><a href={viewExamDetails?.paperObjId.paperUrl}>If failed to load PDF click here!</a></p>
            </object>
          </Col>
        </Row>

      </Col>
    </Row>
  );
}

export default PaperAttempt;
