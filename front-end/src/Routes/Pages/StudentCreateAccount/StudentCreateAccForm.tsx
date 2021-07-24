import React, {FormEvent, useState} from 'react';
import "../../../assests/styles/main.scss"
import {Button, Card, Col, Dropdown, Form, Row} from "react-bootstrap";
import {BrowserRouter as Router, Link, Route, Switch, useHistory} from "react-router-dom";
import axios from "axios";
import DashBoardDOM from "../Dashboard UI/Components/DashBoardDOM";

const StudentCreateForm: React.FC = () => {
    const [fullNameInputCA,setFullNameInputCA] = useState(' ');
    const [mobileInputCA,setMobileInputCA] = useState(' ');
    const [emailInputCA,setEmailInputCA] = useState(' ');
    const [usernameInputCA,setUsernameInputCA] = useState(' ');
    const [passwordInputCA,setPasswordInputCA] = useState(' ');
    const [teacherAccount,setTeacherAccount] = useState(false);
    const [studentAccount,setStudentAccount] = useState(true);
    const [instructorAccount,setInstructorAccount] = useState(false);
    const [selectedOption,setSelectedOption] = useState('Student');

    const selectStudent = () => {
        setTeacherAccount(false);
        setStudentAccount(true);
        setInstructorAccount(false);
        setSelectedOption('Student');
    }
    const selectTeacher = () => {
        setTeacherAccount(true);
        setStudentAccount(false);
        setInstructorAccount(false);
        setSelectedOption('Teacher');
    }
    const selectInstructor = () => {
        setTeacherAccount(false);
        setStudentAccount(false);
        setInstructorAccount(true);
        setSelectedOption('Instructor');
    }
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
    const history = useHistory();

    const changeRouteAfterConfig = (loginSuccess: boolean, userId: string) => {
        if(loginSuccess && teacherAccount){
            return(
                localStorage.setItem('passedTeacherID',userId),
                    history.push('/dashboard')
            )}
        else if(loginSuccess && studentAccount){
            return(
                localStorage.setItem('passedStudentID',userId),
                    history.push('/dashboard/student')
            )}
        else if(loginSuccess && instructorAccount){
            return(
                localStorage.setItem('passedInstructorID',userId),
                    history.push('/dashboard/instructor')
            )}
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
        if(studentAccount){
            axios.post("http://localhost:3001/createAccount",requestCAS)
                .then(resp => {
                    alert(resp.data.message);
                    changeRouteAfterConfig(resp.data.status,resp.data.id);
                })
                .catch(err =>{
                    alert(err);
                })
        }
        else if(teacherAccount){
            axios.post("http://localhost:3001/createTeacherAccount",requestCAS)
                .then(resp => {
                    alert(resp.data.message);
                    changeRouteAfterConfig(resp.data.status,resp.data.id);
                })
                .catch(err =>{
                    alert(err);
                })
        }
        else {
            axios.post("http://localhost:3001/createInstructorAccount",requestCAS)
                .then(resp => {
                    alert(resp.data.message);
                    changeRouteAfterConfig(resp.data.status,resp.data.id);
                })
                .catch(err =>{
                    alert(err);
                })
        }
    }

    return (
        <React.Fragment>
        <Row className=" mx-0 bg-light">
            <Col className="mx-0 px-4">
                <Row className="mx-0 bg-light pb-4" xl={1} lg={1} sm={1} xs={1}>
                    <Col className="text-center">
                        <div className=" px-4 mx-4 py-0">
                            <Row>
                                <Col className="formTopic text-center mt-1 mx-4 pt-4 pb-0 px-4 mb-0">
                                    <h1> {selectedOption} Create Account</h1>
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
                                                                <Form.Label>Account Type</Form.Label>
                                                            </Col>
                                                            <Col className="text-left col-7">
                                                                <Dropdown>
                                                                    <Dropdown.Toggle className="selectBtn py-2 ms-0 px-4">
                                                                        {selectedOption}
                                                                    </Dropdown.Toggle>

                                                                    <Dropdown.Menu>
                                                                        <Dropdown.Item onSelect={selectStudent} >Student</Dropdown.Item>
                                                                        <Dropdown.Item onSelect={selectTeacher} >Teacher</Dropdown.Item>
                                                                        <Dropdown.Item onSelect={selectInstructor}>Instructor</Dropdown.Item>
                                                                    </Dropdown.Menu>
                                                                </Dropdown>
                                                            </Col>
                                                        </Row>
                                                    </Form.Group>

                                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                                        <Row>
                                                            <Col className="col-4 py-1 text-right ">
                                                                <Form.Label>Full Name</Form.Label>
                                                            </Col>
                                                            <Col className="col-7">
                                                                <Form.Control type="text"
                                                                              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                                                  getFullNameInputCA(event.target.value)}
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
                                                                                  getMobileInputCA(event.target.value)}
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

    <Router>
        <Switch>
            <Route path="/dashboard" component={DashBoardDOM}/>
        </Switch>
    </Router>
        </React.Fragment>

    );
}

export default StudentCreateForm;
