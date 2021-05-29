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
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed lobortis ligula,
                                        at molestie leo. Nullam semper vel magna nec ultrices. Curabitur accumsan volutpat
                                        libero, in malesuada leo elementum eu. Ut sollicitudin urna ac velit hendrerit dictum.
                                        Praesent tellus elit, auctor nec nunc ac, elementum fringilla nulla.</p>
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
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed lobortis ligula,
                                        at molestie leo. Nullam semper vel magna nec ultrices. Curabitur accumsan volutpat
                                        libero, in malesuada leo elementum eu. Ut sollicitudin urna ac velit hendrerit dictum.
                                        Praesent tellus elit, auctor nec nunc ac, elementum fringilla nulla.</p>
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
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed lobortis ligula,
                                        at molestie leo. Nullam semper vel magna nec ultrices. Curabitur accumsan volutpat
                                        libero, in malesuada leo elementum eu. Ut sollicitudin urna ac velit hendrerit dictum.
                                        Praesent tellus elit, auctor nec nunc ac, elementum fringilla nulla.</p>
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
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed lobortis ligula,
                                        at molestie leo. Nullam semper vel magna nec ultrices. Curabitur accumsan volutpat
                                        libero, in malesuada leo elementum eu. Ut sollicitudin urna ac velit hendrerit dictum.
                                        Praesent tellus elit, auctor nec nunc ac, elementum fringilla nulla.</p>
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
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed lobortis ligula,
                                        at molestie leo. Nullam semper vel magna nec ultrices. Curabitur accumsan volutpat
                                        libero, in malesuada leo elementum eu. Ut sollicitudin urna ac velit hendrerit dictum.
                                        Praesent tellus elit, auctor nec nunc ac, elementum fringilla nulla.</p>
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