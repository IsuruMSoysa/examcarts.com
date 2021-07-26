import React from 'react';
import {Row, Col} from "react-bootstrap";
import abtImg from '../../../../assests/images/Distance-Learning-Article-PIC.webp'
import "../../../../assests/styles/main.scss"

const AboutUs: React.FC = () => {
    return (
            <Row className="aboutUsSection mx-0" xl={2} lg={1} sm={1} xs={1}>
                <Col className="text-center">
                    <div className="abtContDiv px-4">
                        <Row >
                            <Col className="abtHeading text-center mt-4 pt-4 pb-0 mb-0">
                                <h1>About Us</h1>
                            </Col>
                        </Row>
                        <Row >
                            <Col className="abtCont text-center mt-4 pt-4 pb-0 mb-0 px-4 mx-4">
                                <p> Examcarts is a web platform which meets teachers, students and paper marking instructors,
                                facilitate to conduct online examinations for their paper classes. By creating relevant
                                accounts you can get the automated experience in examination process</p>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col className="abtImgCol p-5 text-center">
                    <img
                        alt=""
                        src={abtImg}
                        width="55%"
                        height="100%"
                        className="coverImg d-inline-block align-top"
                    />
                </Col>
            </Row>
    );
}

export default AboutUs;