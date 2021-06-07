import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import classImg from '../../../../assests/images/classImg.webp'
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import "../Styles/DashBord.scss"
import * as Icon from 'react-feather';
import {Link} from "react-router-dom";

const CreateClassCard : React.FC = () => {
    return (

            <Card style={{ width: '20em', height: '20em' }} className="createCard text-center p-2 m-3">
            <Card.Body className="createCardBdy py-4 align-middle">
                <Row className="p-0">
                    <Col >
                        <Row>
                            <Col className="py-4">
                                <Icon.Plus size='8em'/>
                            </Col>
                        </Row>
                        <Row className="py-3 justify-content-center">
                            <Col >
                                <Link to="/dashboard/createClass"><Button className="px-4" variant="success">Create a Class</Button></Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </Card.Body>
            </Card>

    );
}

export default CreateClassCard;