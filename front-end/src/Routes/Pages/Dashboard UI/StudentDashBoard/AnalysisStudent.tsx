import React from 'react';
import "../../../../assests/styles/main.scss"
import {RouteComponentProps} from "react-router-dom";
import {Col, Row} from "react-bootstrap";

function AnalysisStudent({ match }: RouteComponentProps<{}>) {


  return (
    <Row>
      <Col className="text-center mt-4"><Col className="text-center pt-4">
        <iframe width="1140" height="541.25"
                src="https://app.powerbi.com/reportEmbed?reportId=d799fa2f-e1da-4392-96e9-ab3e5f815e5b&autoAuth=true&ctid=aa232db2-7a78-4414-a529-33db9124cba7&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D"
                frameBorder="0" allowFullScreen={true}></iframe>
      </Col>
      </Col>
    </Row>
  );
}

export default AnalysisStudent;
