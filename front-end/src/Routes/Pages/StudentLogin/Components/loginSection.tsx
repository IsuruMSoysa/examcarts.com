import React, {FormEvent, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Button, Card, Col, Form, Nav, Row} from "react-bootstrap";
import LoginImg from "../../../../assests/images/loginImg.webp";
import {Link} from 'react-router-dom';
import axios from 'axios';

const LoginSection: React.FC = () => {
    const [usernameInput,setUsernameInput] = useState(' ');
    const [passwordInput,setPasswordInput] = useState(' ');

    const getUsernameInput = (name: string) => {
        setUsernameInput(name);
    }

    const getPasswordInput =  (name: string) => {
        setPasswordInput(name);
    }

    const handleLoginStudent = (event: FormEvent) => {
        event.preventDefault();
        let request = {
            username: usernameInput,
            password: passwordInput
        }

        axios.post("http://localhost:3001/login",request)
            .then(resp => {
                alert(resp.data.message);
            })
            .catch(err =>{
                alert(err);
            })
    }

    return (
        <Row className="ourFeaturesSection mx-0">
            <Col className="mx-0 px-0">
                <Row className="mx-0 bg-light pb-4" xl={2} lg={1} sm={1} xs={1}>
                    <Col className="text-center">
                        <div className="abtContDiv px-4 py-0">
                            <Row >
                                <Col className="abtHeading text-center mt-1 pt-1 pb-0 mb-0">
                                    <h1>LOGIN</h1>
                                </Col>
                            </Row>
                            <Row >
                                <Col className="abtCont text-center mt-4 pt-4 pb-0 mb-0 mx-4">
                                        <Card className="ardDiv p-4">
                                            <Card.Header className="px-3 mx-0">
                                                <Nav variant="tabs"
                                                     defaultActiveKey="#first"
                                                     className="ardDivHeader justify-content-center">
                                                    <Nav.Item className="tabLogin px-4">
                                                        <Nav.Link className="tabBtn" href="#first">Student</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="tabLogin px-4">
                                                        <Nav.Link className="tabBtn" href="#two">Teacher</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="tabLogin px-4">
                                                        <Nav.Link className="tabBtn" href="#three">Instructor</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </Card.Header>
                                            <Card.Body className="loginInputs">
                                                <div className="credentials mx-4 my-2 px-4 py-4">
                                                    <Form className="py-3" method="POST" onSubmit={handleLoginStudent}>
                                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                                            <Row>
                                                                <Col className="col-4">
                                                                    <Form.Label>Username</Form.Label>
                                                                </Col>
                                                                <Col className="col-7">
                                                                    <Form.Control type="text"
                                                                                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                                                      getUsernameInput(event.target.value)}
                                                                                  placeholder="Enter Username"/>
                                                                </Col>
                                                            </Row>
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                                            <Row>
                                                                <Col className="col-4">
                                                                    <Form.Label>Password</Form.Label>
                                                                </Col>
                                                                <Col className="col-7">
                                                                    <Form.Control type="password"
                                                                                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                                                      getPasswordInput(event.target.value)}
                                                                                  placeholder="Password" />
                                                                </Col>
                                                            </Row>
                                                        </Form.Group>
                                                         <Button className="loginBtn py-1 px-4" type="submit">Login</Button> 
                                                    </Form>

                                                </div>
                                                <Link to="/forgotPassword" href="/forgotPassword">
                                                    <p  className="forgotPw pt-4 pb-0 d-inline-block">Forgot Password?</p>
                                                </Link>

                                            </Card.Body>
                                        </Card>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col className="abtImgCol pt-4 text-center">
                        <img
                            alt=""
                            src={LoginImg}
                            width="65%"
                            height="85%"
                            className="coverImg d-inline-block pt-4 align-top"
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default LoginSection;
