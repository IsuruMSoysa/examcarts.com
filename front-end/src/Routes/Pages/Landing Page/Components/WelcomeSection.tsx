import React from 'react';
import {Row, Col, Button} from "react-bootstrap";
import coverImg from '../../../../assests/images/coverImg.png'
import "../../../../assests/styles/main.scss"


const WelcomeSection: React.FC = () => {
    return (
        <div className="pt-4">
           <Row className="welcomeSection bg-light mx-0 pt-4 " xl={2} lg={1} sm={1} xs={1}>
                <Col className="coverImgCol p-5 text-center">
                        <img
                            alt=""
                            src={coverImg}
                            width="65%"
                            height="100%"
                            className="coverImg d-inline-block align-top"
                        />
                </Col>

               <Col className="text-center">
                   <div className="welcomeDiv">
                       <Row >
                           <Col className="welcomeQuote text-center mt-4 pt-4 pb-0 mb-0">
                            <h1>Welcome to</h1>
                           </Col>
                       </Row>
                       <Row className="pt-0 mt-0">
                           <Col  className="companyQuote text-center pt-0 mt-0 py-1">
                               <h1>examcarts.com</h1>
                           </Col>
                       </Row>
                       <Row>
                           <Col className="getStarted py-4">
                               <Button
                                 className="getStartedBtn py-2 px-4 my-4"
                                 variant="default">
                                 Get Started
                               </Button>
                           </Col>
                       </Row>
                   </div>
               </Col>
           </Row>
       </div>
    );
}

export default WelcomeSection;