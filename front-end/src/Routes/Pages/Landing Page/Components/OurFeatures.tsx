import React from 'react';
import {Row, Col, Button} from "react-bootstrap";
import onlineExam from '../../../../assests/images/onlineExam.webp'
import searchClasses from '../../../../assests/images/search.webp'
import addClass from '../../../../assests/images/addClass.webp'
import paperMarking from '../../../../assests/images/markPaper.webp'
import analysis from '../../../../assests/images/analyze.webp'
import "../../../../assests/styles/main.scss"

const OurFeatures: React.FC = () => {
    return (
        <Row className="ourFeaturesSection mx-0">
            <Col className="mx-0 px-0">
                <Row className="mx-0 bg-light">
                    <Col className="featHeading text-center mt-4 pt-4 pb-0 mb-0">
                        <h1>Our Features</h1>
                    </Col>
                </Row>

                <Row className="mx-0 bg-light" xl={2} lg={1} sm={1} xs={1}>
                    <Col className="text-center">
                        <div className="abtContDiv px-4 py-4">
                            <Row >
                                <Col className="abtHeading text-center mt-3 pt-3 pb-0 mb-0">
                                    <h1>Online Examinations</h1>
                                </Col>
                            </Row>
                            <Row >
                                <Col className="abtCont text-center mt-4 pt-4 pb-0 mb-0 px-4 mx-4">
                                    <p>Online examination is the core functionality of the examcarts. It facilitate you
                                    to conduct the online examinations and the other processes related to the online
                                    examinations</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col className="abtImgCol p-5 text-center">
                        <img
                            alt=""
                            src={onlineExam}
                            width="45%"
                            height="100%"
                            className="coverImg d-inline-block align-top"
                        />
                    </Col>
                </Row>

                <Row className="mx-0 bg-light" xl={2} lg={1} sm={1} xs={1}>
                    <Col className="abtImgCol p-5 text-center">
                        <img
                            alt=""
                            src={searchClasses}
                            width="40%"
                            height="100%"
                            className="coverImg d-inline-block align-top"
                        />
                    </Col>
                    <Col className="text-center">
                        <div className="abtContDiv px-4 py-4">
                            <Row >
                                <Col className="abtHeading text-center mt-3 pt-3 pb-0 mb-0">
                                    <h1>Search Classes</h1>
                                </Col>
                            </Row>
                            <Row >
                                <Col className="abtCont text-center mt-4 pt-4 pb-0 mb-0 px-4 mx-4">
                                    <p>Students can search classes in the system and they can enroll to the classes by
                                    using simple payment process and with the approval of the teacher they can enroll to
                                    the classes. After that they can participate to the exams which conducting by each classes</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

                <Row className="mx-0 bg-light" xl={2} lg={1} sm={1} xs={1}>
                    <Col className="text-center">
                        <div className="abtContDiv px-4 py-4">
                            <Row >
                                <Col className="abtHeading text-center mt-3 pt-3 pb-0 mb-0">
                                    <h1>Create Your Class</h1>
                                </Col>
                            </Row>
                            <Row >
                                <Col className="abtCont text-center mt-4 pt-4 pb-0 mb-0 px-4 mx-4">
                                    <p>Teacher can create their class by initializing the class details. After that they
                                    can get enrollments the of students after approving the payment details of the students </p>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col className="abtImgCol p-5 text-center">
                        <img
                            alt=""
                            src={addClass}
                            width="40%"
                            height="100%"
                            className="coverImg d-inline-block align-top"
                        />
                    </Col>
                </Row>

                <Row className="mx-0 bg-light" xl={2} lg={1} sm={1} xs={1}>
                    <Col className="abtImgCol p-5 text-center">
                        <img
                            alt=""
                            src={paperMarking}
                            width="40%"
                            height="100%"
                            className="coverImg d-inline-block align-top"
                        />
                    </Col>
                    <Col className="text-center">
                        <div className="abtContDiv px-4 py-4">
                            <Row >
                                <Col className="abtHeading text-center mt-3 pt-3 pb-0 mb-0">
                                    <h1>Online Paper Marking</h1>
                                </Col>
                            </Row>
                            <Row >
                                <Col className="abtCont text-center mt-4 pt-4 pb-0 mb-0 px-4 mx-4">
                                    <p>The paper marking instructors can connect with the teachers and evaluate the students
                                    answers and submit the marks of them.</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>

                <Row className="mx-0 bg-light" xl={2} lg={1} sm={1} xs={1}>
                    <Col className="text-center">
                        <div className="abtContDiv px-4 py-4">
                            <Row >
                                <Col className="abtHeading text-center mt-3 pt-3 pb-0 mb-0">
                                    <h1>Results Analysis</h1>
                                </Col>
                            </Row>
                            <Row >
                                <Col className="abtCont text-center mt-4 pt-4 pb-0 mb-0 px-4 mx-4">
                                    <p>Teaches and Students get the analysis of their performance in online examinations
                                    this wil be valuable make efficient and effective the process of their
                                        teaching and studying process</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col className="abtImgCol p-5 text-center">
                        <img
                            alt=""
                            src={analysis}
                            width="40%"
                            height="100%"
                            className="coverImg d-inline-block align-top"
                        />
                    </Col>
                </Row>

                <Row className="mx-0 bg-light">
                    <Col className="featHeading text-center mt-4 pt-4 pb-0 mb-0">
                        <Button
                            className="getStartedBtn py-2 px-4 my-4"
                            variant="default">
                            Get Started
                        </Button>
                    </Col>
                </Row>

            </Col>
        </Row>
    );
}

export default OurFeatures;