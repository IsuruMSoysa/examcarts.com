import React, {FormEvent, useState} from 'react';
import "../../../assests/styles/main.scss"
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";

const StudentCreateForm: React.FC = () => {
    const [fullNameInputCA,setFullNameInputCA] = useState(' ');
    const [mobileInputCA,setMobileInputCA] = useState(' ');
    const [emailInputCA,setEmailInputCA] = useState(' ');
    const [usernameInputCA,setUsernameInputCA] = useState(' ');
    const [passwordInputCA,setPasswordInputCA] = useState(' ');

    const getFullNameInputCA = (name: string) => {
        setFullNameInputCA(name);
    }
    const getMobileInputCA = (name: string) => {
        setMobileInputCA(name);
    }
    const getEmailInputCA = (name: string) => {
        setEmailInputCA(name);
    }
    const getUsernameInputCA = (name: string) => {
        setUsernameInputCA(name);
    }
    const getPasswordInputCA = (name: string) => {
        setPasswordInputCA(name);
    }
    const handleStudentCreateAccount = (event: FormEvent) => {
        event.preventDefault();
        let requestCAS = {
            fullName: fullNameInputCA,
            mobile: mobileInputCA,
            email: emailInputCA,
            username: usernameInputCA,
            password: passwordInputCA
        }
        console.log(requestCAS);
        alert("Account Created Successfully");

         axios.post("http://localhost:3001/createAccount",requestCAS)
            .then(resp => {
                alert(resp.data.message);
            })
            .catch(err =>{
                alert(err);
            })
    }


    return (
        <Row className=" mx-0 bg-light">
            <Col className="mx-0 px-4">
                <Row className="mx-0 bg-light pb-4" xl={1} lg={1} sm={1} xs={1}>
                    <Col className="text-center">
                        <div className=" px-4 mx-4 py-0">
                            <Row>
                                <Col className="formTopic text-center mt-1 mx-4 pt-4 pb-0 px-4 mb-0">
                                    <h1>Student Create Account</h1>
                                </Col>
                            </Row>
                            <Row className="px-4">
                                <Col className=" text-center px-4 mt-4 pt-4 pb-0 mb-0 mx-4">
                                    <Card className="cardDiv mx-4 p-4">
                                        <Card.Body className="resetInputs">
                                            <div className="credentials mx-4 my-2 px-4 py-4">
                                                <Form className="py-3 ">
                                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                                        <Row>
                                                            <Col className="col-4 py-1 text-right ">
                                                                <Form.Label>Full Name</Form.Label>
                                                            </Col>
                                                            <Col className="col-7">
                                                                <Form.Control type="text"
                                                                              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                                                  getMobileInputCA(event.target.value)}
                                                                              placeholder="Full name"/>
                                                            </Col>
                                                        </Row>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3 text-right" controlId="formGroupEmail">
                                                        <Row >
                                                            <Col className="col-4 py-1 text-right">
                                                                <Form.Label>Mobile Number</Form.Label>
                                                            </Col>
                                                            <Col className="col-7">
                                                                <Form.Control type="text"
                                                                              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                                                  getFullNameInputCA(event.target.value)}
                                                                              placeholder="Mobile Number"/>
                                                            </Col>
                                                        </Row>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                                        <Row >
                                                            <Col className="col-4 py-1 text-right">
                                                                <Form.Label>Email Address</Form.Label>
                                                            </Col>
                                                            <Col className="col-7">
                                                                <Form.Control type="email"
                                                                              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                                                  getEmailInputCA(event.target.value)}
                                                                              placeholder="email address"/>
                                                            </Col>
                                                        </Row>
                                                    </Form.Group>
                                                    <Row xl={2} lg={1} sm={1} xs={1} className="py-2">
                                                        <Col>
                                                            <Form.Group className="mb-3 text-right"
                                                                        controlId="formGroupPassword">
                                                                <Row  >
                                                                    <Col className="col-4 py-1 text-right">
                                                                        <Form.Label>Username</Form.Label>
                                                                    </Col>
                                                                    <Col className="col-7 text-right">
                                                                        <Form.Control type="text"
                                                                                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                                                          getUsernameInputCA(event.target.value)}
                                                                                      placeholder="Username" />
                                                                    </Col>
                                                                </Row>
                                                            </Form.Group>
                                                        </Col>
                                                        <Col>
                                                            <Form.Group className="mb-3 text-right"
                                                                        controlId="formGroupPassword">
                                                                <Row>
                                                                    <Col className="col-4 py-1">
                                                                        <Form.Label>Password</Form.Label>
                                                                    </Col>
                                                                    <Col className="col-7 text-left">
                                                                        <Form.Control type="password"
                                                                                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                                                          getPasswordInputCA(event.target.value)}
                                                                                      placeholder="Password" />
                                                                    </Col>
                                                                </Row>
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                                    <Button className="createBtn py-2 mx-4 px-4"
                                                            onClick={handleStudentCreateAccount}>
                                                        Create Account
                                                    </Button>
                                                <Link to="/login">
                                                    <Button href="/login" className="createBtnCancel mx-4 py-2 px-4">
                                                        Back
                                                    </Button>
                                                </Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default StudentCreateForm;
