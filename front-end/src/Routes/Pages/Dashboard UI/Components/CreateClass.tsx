import React, {FormEvent, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";

const CreateClassForm: React.FC = () => {
    const [classNameInput,setClassNameInput] = useState(' ');
    const [educationInstituteInput,setEducationInstituteInput] = useState(' ');
    const [descriptionInput,setDescriptionInput] = useState(' ');
    const [admissionInput,setAdmissionInput] = useState(' ');
    const [monthlyInput,setMonthlyInput] = useState(' ');

    const getClassNameInput = (name: string) => {
        setClassNameInput(name);
    }
    const getEducationInstituteInput = (name: string) => {
        setEducationInstituteInput(name);
    }
    const getAdmissionInput = (name: string) => {
        setAdmissionInput(name);
    }
    const getDescriptionInput = (name: string) => {
        setDescriptionInput(name);
    }
    const getMonthlyInput = (name: string) => {
        setMonthlyInput(name);
    }

    const handleTeacherCreateClass = (event: FormEvent) => {
        event.preventDefault();

        let requestCreateClass = {
            teacherId : localStorage.getItem('passedTeacherID'),
            className: classNameInput,
            educationInstitute : educationInstituteInput,
            description : descriptionInput,
            admissionFee: admissionInput,
            monthlyFee: monthlyInput
        }

            axios.post("http://localhost:3001/createClass",requestCreateClass)
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
                        <div className=" px-1 mx-4 py-0">
                            <Row>
                                <Col className="formTopic text-center mt-1 mx-4 pt-4 pb-0 px-2 mb-0">
                                    <h1> Create a Class</h1>
                                </Col>
                            </Row>
                            <Row className="px-4 py-0 my-1">
                                <Col className=" text-center px-4 mt-1 pt-1 pb-0 mb-0 mx-4">
                                    <Card className="cardDiv mx-4 p-1 pb-4">
                                        <Card.Body className="resetInputs">
                                            <div className="credentials mx-4 my-2 px-4 py-4">
                                                <Form className="py-3 ">
                                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                                        <Row>
                                                            <Col className="col-4 py-1 text-right ">
                                                                <Form.Label>Class Name</Form.Label>
                                                            </Col>
                                                            <Col className="col-7">
                                                                <Form.Control type="text"
                                                                              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                                                  getClassNameInput(event.target.value)}
                                                                              placeholder="Class name"/>
                                                                </Col>
                                                        </Row>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3 text-right" controlId="formGroupEmail">
                                                        <Row >
                                                            <Col className="col-4 py-1 text-right">
                                                                <Form.Label>Education Institute</Form.Label>
                                                            </Col>
                                                            <Col className="col-7">
                                                                <Form.Control type="text"
                                                                              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                                                  getEducationInstituteInput(event.target.value)}
                                                                              placeholder="Education Institute"/>
                                                            </Col>
                                                        </Row>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                                        <Row >
                                                            <Col className="col-4 py-1 text-right">
                                                                <Form.Label>Description</Form.Label>
                                                            </Col>
                                                            <Col className="col-7">
                                                                <Form.Control  type="text"
                                                                              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                                                  getDescriptionInput(event.target.value)}
                                                                              placeholder="Description"/>
                                                            </Col>
                                                        </Row>
                                                    </Form.Group>
                                                    <Row xl={2} lg={1} sm={1} xs={1} className="py-2">
                                                        <Col>
                                                            <Form.Group className="mb-3 text-right"
                                                                        controlId="formGroupPassword">
                                                                <Row  >
                                                                    <Col className="col-4 py-1 text-right">
                                                                        <Form.Label>Admission Fee</Form.Label>
                                                                    </Col>
                                                                    <Col className="col-7 text-right">
                                                                        <Form.Control type="text"
                                                                                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                                                          getAdmissionInput(event.target.value)}
                                                                                      placeholder="Admission" />
                                                                    </Col>
                                                                </Row>
                                                            </Form.Group>
                                                        </Col>
                                                        <Col>
                                                            <Form.Group className="mb-3 text-right"
                                                                        controlId="formGroupPassword">
                                                                <Row>
                                                                    <Col className="col-4 py-1">
                                                                        <Form.Label>Monthly Fee</Form.Label>
                                                                    </Col>
                                                                    <Col className="col-7 text-left">
                                                                        <Form.Control type="text"
                                                                                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                                                          getMonthlyInput(event.target.value)}
                                                                                      placeholder="Monthly Fee" />
                                                                    </Col>
                                                                </Row>
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                                <Button className="createBtn py-2 mx-4 px-4"
                                                        onClick={handleTeacherCreateClass}>
                                                    Create Class
                                                </Button>
                                                <Link to="/dashboard">
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

export default CreateClassForm;
