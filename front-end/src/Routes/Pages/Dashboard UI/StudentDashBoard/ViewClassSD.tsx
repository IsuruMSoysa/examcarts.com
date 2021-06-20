import React, {FormEvent, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Button, Card, Col, Dropdown, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";


type ViewClassPropsSD = {
    titleV : string
    instituteV : string
    teacherIdV : string,
    descriptionV : string,
    admissionFeeV: string,
    monthlyFeeV: string,
    enrollmentsV : number,
    getClassToEnroll : (title:string) => void
}


function ViewClassSD (props: ViewClassPropsSD){

    const [classToEnroll,setClassToEnroll] = useState('');
    const classEnrollTitle = () => {
        setClassToEnroll(props.titleV);
        props.getClassToEnroll(classToEnroll);
        console.log("items" ,classToEnroll)
    }

    return (
        <Row className=" mx-0 bg-light">
            <Col className="mx-0 px-4">
                <Row className="mx-0 bg-light pb-4" xl={1} lg={1} sm={1} xs={1}>
                    <Col className="text-center">
                        <div className=" px-1 mx-4 py-0">
                            {/*<Row>*/}
                            {/*    <Col className="formTopic text-center mt-1 mx-4 pt-4 pb-0 px-2 mb-0">*/}
                            {/*        <h1>Class Name</h1>*/}
                            {/*    </Col>*/}
                            {/*</Row>*/}
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
                                                                <Form.Control disabled
                                                                              value = {props.titleV}
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
                                                                <Form.Control disabled
                                                                              value = {props.instituteV}
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
                                                                               disabled
                                                                               as="textarea"
                                                                               value = {props.descriptionV}
                                                                               placeholder="No Details added"/>
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
                                                                                      disabled
                                                                                      value = {props.admissionFeeV}
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
                                                                                      disabled
                                                                                      value = {props.monthlyFeeV}
                                                                                      placeholder="Monthly Fee" />
                                                                    </Col>
                                                                </Row>
                                                            </Form.Group>
                                                        </Col>
                                                    </Row>
                                                </Form>

                                                <Link to="/dashboard/student/addclass/enroll">
                                                <Button
                                                    onClick={classEnrollTitle}
                                                    className="createBtn py-2 mx-4 px-4">
                                                    {/*// onClick={handleTeacherCreateClass}>*/}
                                                    {/*//     onClick={handleTeacherEditClass}>*/}
                                                    Enroll Now
                                                </Button>
                                                </Link>
                                                <Link to="/dashboard/student/addclass">
                                                    <Button  className="createBtnCancel mx-4 py-2 px-4">
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

export default ViewClassSD;
