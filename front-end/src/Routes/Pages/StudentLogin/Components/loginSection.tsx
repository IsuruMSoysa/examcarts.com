import React, {FormEvent, useEffect, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Button, Card, Col, Container, Form, Nav, Row} from "react-bootstrap";
import LoginImg from "../../../../assests/images/loginImg.webp";
import {Link, Route, BrowserRouter as Router,Switch,Redirect,useHistory} from 'react-router-dom';
import axios from 'axios';
import DashBoardDOM from "../../Dashboard UI/Components/DashBoardDOM";
import StudentLogin from "../StudentLogin";
import StudentCreateAccountDOM from "../../StudentCreateAccount/StudentCreateAccountDOM";
import ResetPasswordDOM from "../ResetPasswordDOM";
import LandingPage from "../../Landing Page/landingPage";

// function Redirect(props: { to: string }) {
//     return<Route path="/dashboard" component={DashBoardDOM}/>
// }

const LoginSection: React.FC = () => {
    const [usernameInput,setUsernameInput] = useState(' ');
    const [passwordInput,setPasswordInput] = useState(' ');
    const [teacherForm,setTeacherForm] = useState(false);
    const [studentForm,setStudentForm] = useState(true);
    const [instructorForm,setInstructorForm] = useState(false);

    const selectStudentForm = () => {
        setTeacherForm(false);
        setStudentForm(true);
        setInstructorForm(false);
    }
    const selectTeacherForm = () => {
        setTeacherForm(true);
        setStudentForm(false);
        setInstructorForm(false);
    }
    const selectInstructorForm = () => {
        setTeacherForm(false);
        setStudentForm(false);
        setInstructorForm(true);
    }
    const getUsernameInput = (name: string) => {
        setUsernameInput(name);
    }

    const getPasswordInput =  (name: string) => {
        setPasswordInput(name);
    }

     const history = useHistory();

    const changeRouteAfterConfig = (loginSuccess: boolean, teacherId: string) => {
        if(loginSuccess){
            return(
                    localStorage.setItem('passedTeacherID',teacherId),
                     history.push('/dashboard')
                        // console.log("Done")
                            // <Redirect to="/dashboard" />
                //     <Link to = "/dashboard"/>
                    );
        }
    }

    const handleLoginStudent = (event: FormEvent) => {
        event.preventDefault();
        let request = {
            username: usernameInput,
            password: passwordInput
        }

            if(studentForm){
                axios.post("http://localhost:3001/login",request)
                    .then(resp => {
                        alert(resp.data.message);
                    //    changeRouteAfterConfig(resp.data.status);


                    })
                    .catch(err =>{
                        alert(err);
                    })
            }
            else if (teacherForm){
                axios.post("http://localhost:3001/loginTeacher",request)
                    .then(resp => {
                        // saveTeacherId(resp.data.id);
                        alert(resp.data.message);
                        changeRouteAfterConfig(resp.data.status,resp.data.id);
                        // localStorage('teacherID',resp.data.id);
                    })
                    .catch(err =>{
                        alert(err);
                    })
            }
            else{
                axios.post("http://localhost:3001/loginInstructor",request)
                    .then(resp => {
                        alert(resp.data.message);
                    })
                    .catch(err =>{
                        alert(err);
                    })
            }
         }

    return (
         <React.Fragment>
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
                                                        <Nav.Link className="tabBtn" onSelect={selectStudentForm} href="#first">Student</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="tabLogin px-4">
                                                        <Nav.Link className="tabBtn" onSelect={selectTeacherForm} href="#two">Teacher</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="tabLogin px-4">
                                                        <Nav.Link className="tabBtn" onSelect={selectInstructorForm} href="#three">Instructor</Nav.Link>
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
            <Router>
                <Switch>
                    <Route path="/dashboard" component={DashBoardDOM}/>
                </Switch>
            </Router>
         </React.Fragment>
    );
}

export default LoginSection;
