import React from 'react';
import "../../../../assests/styles/main.scss"
import {RouteComponentProps} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import * as Icon from 'react-feather';

function PendingEnrollRequest({ match }: RouteComponentProps<{}>) {


    return (
        <Row>
            <Col className="text-center mt-4">
                <Col className="text-center mt-4 pt-4"> <Icon.Loader color="#5DAA68" size="25"/></Col>
               <Col className="text-center pt-4">
                   <h3>Your request sent to confirmation...</h3>
               </Col>
            </Col>
        </Row>
    );
}

export default PendingEnrollRequest;
