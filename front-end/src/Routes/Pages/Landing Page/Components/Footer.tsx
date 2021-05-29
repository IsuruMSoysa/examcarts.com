import React from 'react';
import {Row, Col} from "react-bootstrap";
import "../../../../assests/styles/main.scss"
import siteLogo from '../../../../assests/images/logogreen.png'
import * as Icon from 'react-feather';

const Footer: React.FC = () => {
    return (

        <div className="footerSection">
            <Row className="footerTop mx-0 py-0" xl={2} lg={1} sm={1} xs={1}>
                <Col >
                    <div className="footerTri bg-light text-center" ></div>
                </Col>
            </Row>

            <Row className="footerLinks text-center mx-0 py-0 pb-4" xl={2} lg={1} sm={1} xs={1}>
                <Col className="footLogo align-middle text-center" >
                            <img
                            alt=""
                            src={siteLogo}
                            width="auto"
                            height="60"
                            className="d-inline-block "
                            />
                </Col>

                <Col >
                    <h2 className="contactUs pb-4">Contact Us</h2>
                    <Row className="justify-content-center  px-4 mx-2 py-2">
                        <Col className="col-3 text-right">
                            <Icon.Mail color="#5DAA68"/>
                        </Col>
                        <Col className="col-7  text-left">
                            <a className="mailLink">examcarts@gmail.com</a>
                        </Col>
                    </Row>
                    <Row className="justify-content-center  px-4 mx-2 py-2">
                        <Col className="col-3 text-right">
                            <Icon.MessageCircle color="#5DAA68"/>
                        </Col>
                        <Col className="col-7  text-left">
                            <a className="mailLink">+94 77 1 534 457</a>
                        </Col>
                    </Row>
                    <Row className="justify-content-center  px-4 mx-2 py-2">
                        <Col className="col-3 text-right">
                            <Icon.Facebook color="#5DAA68"/>
                        </Col>
                        <Col className="col-7  text-left">
                            <a className="mailLink">www.facebook.com/examcarts.com</a>
                        </Col>
                    </Row>
                    <Row className="justify-content-center  px-4 mx-2 py-2">
                        <Col className="col-3 text-right">
                            <Icon.Instagram color="#5DAA68"/>
                        </Col>
                        <Col className="col-7  text-left">
                            <a className="mailLink">www.instagram.com/examcarts_com</a>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="copyrightLabel text-center mx-0 py-0">
                <Col >
                    <p className="pt-2 pb-2">Developed By <span dangerouslySetInnerHTML={{ "__html": "&copy;" }}/> examcarts.com</p>
                </Col>
            </Row>

        </div>
    );
}

export default Footer;