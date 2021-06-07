import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import classImg from '../../../../assests/images/classImg.webp'
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import "../Styles/DashBord.scss"

const ClassCardTeacher: React.FC = () => {
    return (
            <Card style={{ width: '20em',height: '20em' }} className="classCard text-center m-3 p-2">
                <Card.Img variant="top" src={classImg} />
                <Card.Body className="pt-2">
                    <Card.Title>2021 A/L Combine Maths</Card.Title>
                    <Card.Text>
                        <label>Kaluthara : 120 Enrolllments</label>
                    </Card.Text>
                    <Row>
                        <Col>
                            <label className="dueExamDate">Next Exam : 2021.08.10</label>
                        </Col>
                        <Col className="col-4">
                            <Button className="px-4" variant="success">Visit</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
    );
}

export default ClassCardTeacher;