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

              {/*<iframe width="1140" height="541.25"*/}
              {/*        src="https://app.powerbi.com/reportEmbed?reportId=a9b625b7-fa74-4ee1-b0dc-36846a184e67&autoAuth=true&ctid=aa232db2-7a78-4414-a529-33db9124cba7&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D"*/}
              {/*        frameBorder="0" allowFullScreen={true}></iframe>*/}
            </Col>
        </Row>
    );
}

export default PendingEnrollRequest;
