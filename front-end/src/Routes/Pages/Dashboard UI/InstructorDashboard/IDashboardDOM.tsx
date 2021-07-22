import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {Col, Container, Row} from "react-bootstrap";



const IDashboardDOM: React.FC = () => {

  return (
    <Container fluid className="dashBordDOM p-0 m-0">
      <Row>
        <Col>
          <h1>Hello World</h1>
        </Col>
      </Row>
    </Container>

  );
}

export default IDashboardDOM;