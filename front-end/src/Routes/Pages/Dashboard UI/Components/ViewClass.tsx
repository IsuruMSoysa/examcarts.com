import React, {FormEvent, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Button, Card, Col, Dropdown, Form, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";


type ViewClassProps = {
    titleV : string
    instituteV : string
    teacherIdV : string,
    descriptionV : string,
    admissionFeeV: string,
    monthlyFeeV: string,
    enrollmentsV : number,
    _idV : string,
}


function ViewClass (props: ViewClassProps){
    const [enableEdit,setEnableEdit] = useState(false);
    const [classNameUpdate,setClassNameUpdate] = useState(' ');
    const [educationInstituteUpdate,setEducationInstituteUpdate] = useState(' ');
    const [descriptionUpdate,setDescriptionUpdate] = useState(' ');
    const [admissionUpdate,setAdmissionUpdate] = useState(' ');
    const [monthlyDelete,setMonthlyDelete] = useState(' ');

    const getClassNameUpdate = (name: string) => {
        setClassNameUpdate(name);
    }
    const getEducationInstituteUpdate = (name: string) => {
        setEducationInstituteUpdate(name);
    }
    const getAdmissionUpdate = (name: string) => {
        setAdmissionUpdate(name);
    }
    const getDescriptionUpdate = (name: string) => {
        setDescriptionUpdate(name);
    }
    const getMonthlyUpdate = (name: string) => {
        setMonthlyDelete(name);
    }

    const handleTeacherEditClass =() => {
        setEnableEdit(!enableEdit)

    }

    return (
        <Row className=" mx-0 bg-light">
            <Col className="mx-0 px-4">
                <Row className="mx-0 bg-light pb-4" xl={1} lg={1} sm={1} xs={1}>
                    <Col className="text-center">
                        <div className=" px-1 mx-4 py-0">
                            <Row>
                                <Col className="formTopic text-center mt-1 mx-4 pt-4 pb-0 px-2 mb-0">
                                    <h1> {enableEdit ? "Update Class Details" :  "Class details"} </h1>
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
                                                                {
                                                                    enableEdit ?
                                                                <Form.Control
                                                                              value = {props.titleV}
                                                                              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                                                  getClassNameUpdate(event.target.value)}
                                                                              placeholder="Class name"/> :
                                                                        <Form.Control disabled
                                                                                      value = {props.titleV}
                                                                                      placeholder="Class name"/>
                                                                }
                                                            </Col>
                                                        </Row>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3 text-right" controlId="formGroupEmail">
                                                        <Row >
                                                            <Col className="col-4 py-1 text-right">
                                                                <Form.Label>Education Institute</Form.Label>
                                                            </Col>
                                                            <Col className="col-7">
                                                                {
                                                                    enableEdit ?
                                                                        <Form.Control
                                                                                      value = {props.instituteV}
                                                                                      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                                                          getEducationInstituteUpdate(event.target.value)}
                                                                                      placeholder="Education Institute"/> :
                                                                        <Form.Control disabled
                                                                                      value = {props.instituteV}
                                                                                      placeholder="Education Institute"/>
                                                                }
                                                            </Col>
                                                        </Row>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                                        <Row >
                                                            <Col className="col-4 py-1 text-right">
                                                                <Form.Label>Description</Form.Label>
                                                            </Col>
                                                            <Col className="col-7">
                                                                {
                                                                    enableEdit ?
                                                                        <Form.Control  type="text"
                                                                                       as="textarea"
                                                                                       onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                                                           getDescriptionUpdate(event.target.value)}
                                                                                       value = {props.descriptionV}
                                                                                       placeholder="No Details added"/>:
                                                                        <Form.Control  type="text"
                                                                                       as="textarea"
                                                                                       readOnly
                                                                                       value = {props.descriptionV}
                                                                                       placeholder="No Details added"/>
                                                                }
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
                                                                        {
                                                                            enableEdit ?
                                                                                <Form.Control type="text"
                                                                                              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                                                                  getAdmissionUpdate(event.target.value)}
                                                                                              value = {props.admissionFeeV}
                                                                                              placeholder="Admission" />
                                                                                :
                                                                                <Form.Control type="text"
                                                                                              disabled
                                                                                              value = {props.admissionFeeV}
                                                                                              placeholder="Admission" />

                                                                        }
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
                                                                        {
                                                                            enableEdit ?
                                                                                <Form.Control type="text"
                                                                                              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                                                                                  getMonthlyUpdate(event.target.value)}
                                                                                              value = {props.monthlyFeeV}
                                                                                              placeholder="Monthly Fee" />
                                                                                :
                                                                                <Form.Control type="text"
                                                                                              disabled
                                                                                              value = {props.monthlyFeeV}
                                                                                              placeholder="Monthly Fee" />

                                                                        }
                                                                    </Col>
                                                                </Row>
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                                <Button className="createBtn py-2 mx-4 px-4"
                                                        // onClick={handleTeacherCreateClass}>
                                                         onClick={handleTeacherEditClass}>{enableEdit ? "Update" :  "Edit"}
                                                </Button>

                                                <Button  className="createBtnCancel mx-4 py-2 px-4">
                                                    {enableEdit ?
                                                        <Nav.Link className="createBtnCancelLink p-0" onClick={handleTeacherEditClass}>
                                                            Cancel
                                                        </Nav.Link> :  <Link className="createBtnCancelLink" to="/dashboard">
                                                            Back
                                                        </Link>
                                                    }
                                                    </Button>



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

export default ViewClass;
