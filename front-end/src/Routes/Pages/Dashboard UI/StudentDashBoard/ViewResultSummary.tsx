import React, {useEffect, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Link, RouteComponentProps} from "react-router-dom";
import {Button, Col, Form, Row} from "react-bootstrap";
import {Iexamins, IResultsSummary} from "../../../../Types/teacherTypes";
import axios from "axios";

function ViewExamDetails({ match }: RouteComponentProps<{}>) {
  const [viewResultsDetails,setViewResultsDetails] = useState<IResultsSummary>();
  const [examIdView,setExamIdView] = useState<string>('');

  useEffect(() => {
    let paramsID = JSON.stringify(match.params);
    let examIdViewV = (JSON.parse(paramsID)).id;
    setExamIdView(examIdViewV);
    getViewClassDetailSD(examIdViewV);
  }, []);

  const getViewClassDetailSD = (examIdViewR:string) => {
    axios.post('http://localhost:3001/getreleasedexamdetails', { examObjId : examIdViewR})
      .then(resp => {
       setViewResultsDetails(resp.data.items);
       // console.log(resp.data.items)
      })
      .catch(err =>{
        alert(err);
      })
  }

  return (
    <Row className=" mx-4 my-4 py-1 p-4 ">

      <Col className=" text-center m-4 p-0">
        <Form>
          <div className="pb-4 pt-0">
            <h2><b>Exam Results Summary</b></h2><br/><br/>
            <h5>Exam Name : {viewResultsDetails?.examname}</h5><br/>
            <h5>Class Name : {viewResultsDetails?.nameofclass}</h5><br/>
            <h5>Teacher Name : {viewResultsDetails?.teachername}</h5><br/><br/>
            <h4>Final Marks : {viewResultsDetails?.marks}</h4>
          </div>


          <Row>
            <Col className="text-center pt-4">
                <Button className="px-4 mx-4"  type="submit"
                        variant="success"><b>
                          <a className="doc-download-btn" href={viewResultsDetails?.paperurl} target="_blank">
                            View Paper
                          </a>
                        </b></Button>
            </Col>
          </Row>
          <Row>
            <Col className="text-center py-3">
                <Button className="px-4 mx-4"  type="submit"
                        variant="success"><b>
                          <a className="doc-download-btn" href={viewResultsDetails?.markingurl} target="_blank">
                            View Marking Schema
                          </a>
                        </b></Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default ViewExamDetails;
