import React from 'react';
import "../../../../assests/styles/main.scss"
import {RouteComponentProps} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import CreatePaperCard from "./CrreatePaperCard";

function CreatePaper({ match }: RouteComponentProps<{}>) {

  return (
    <Row>
      <Col className="text-center mt-2">
        <Row>
          <Col className="text-center pt-4">
            <h2>My Papers</h2>
          </Col>
        </Row>
       <Row  className="classItemsContainer p-4 mt-2 ">
         <Col>
           <CreatePaperCard/>
         </Col>
       </Row>
      </Col>

    </Row>
  );
}

export default CreatePaper;
