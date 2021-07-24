import React, { useEffect, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Link, RouteComponentProps} from "react-router-dom";
import {Button, Col, Row} from "react-bootstrap";
import axios from "axios";
import {IenrollmentRequestTable} from "../../../../Types/teacherTypes";




function ViewRequest({ match }: RouteComponentProps<{}>) {
    const [viewRequestDetails,setViewRequestDetails] = useState<IenrollmentRequestTable>();
    const [requestIdView,setRequestIdView] = useState<string>('');
    const [receiptDecision,setReceiptDecision] = useState<string>('');

    useEffect(() => {
        let paramsID = JSON.stringify(match.params);
        let reqIdViewV = (JSON.parse(paramsID)).id;
        setRequestIdView(reqIdViewV);
        getViewRequestDetailSD(reqIdViewV);
    }, []);

    const getViewRequestDetailSD = (reqIdViewR:string) => {
        axios.post('http://localhost:3001/getEnrollRequest', { reqId : reqIdViewR})
            .then(resp => {
                setViewRequestDetails(resp.data.items);
                console.log(resp.data.items)
            })
            .catch(err =>{
                alert(err);
            })
    }

    const acceptRequest = () => {
        setReceiptDecision("accept");
        sendRequestDecision("accept");
    }
    const rejectClick = () => {
        setReceiptDecision("reject");
        sendRequestDecision("reject");
    }

    const sendRequestDecision = (decision:string) => {
        axios.post('http://localhost:3001/sendDecision', { reqId: requestIdView ,decision : decision})
            .then(resp => {
                setViewRequestDetails(resp.data.items);
                console.log(resp.data.items)
            })
            .catch(err =>{
                alert(err);
            })
    }

    return (
        <Row>
            <Col className="text-center mt-4">
                <Col className="text-center pt-4">
                    <h3>Student Name : {viewRequestDetails?.studentId.fullName} </h3>
                    <h3>Requested Class : {viewRequestDetails?.classId.className} </h3>
                    <br/>
                    <Row className="requestEnrollDetails pt-4">
                        <Col>
                            <label>Requested Date : {viewRequestDetails?.UploadedTime} </label>
                        </Col>
                    </Row>
                    <Row className="requestEnrollDetails">
                        <Col>
                            <label>Mobile Number: {viewRequestDetails?.studentId.mobile}</label>
                        </Col>
                    </Row>
                    <Row className="requestEnrollDetails">
                        <Col>
                            <label>E mail : {viewRequestDetails?.studentId.email} </label>
                        </Col>
                    </Row>
                    <Row className="requestEnrollDetails">
                        <Col>
                            <label>Address : {viewRequestDetails?.address} </label>
                        </Col>
                    </Row>
                    <Row className="requestEnrollDetails pt-4">
                        <Col>
                            <label>Receipt Number : {viewRequestDetails?.receiptNo} </label>
                        </Col>
                        <Col>
                            <label>Bank : {viewRequestDetails?.bankName} </label>
                        </Col>
                        <Col>
                            <label>Branch : {viewRequestDetails?.branchName} </label>
                        </Col>
                    </Row>
                    <Row className="requestEnrollDetails py-3">
                        <Col>
                            <img src={viewRequestDetails?.ImgUrl} width="500em"/>
                        </Col>
                    </Row>

                    <Row className="requestEnrollDetails pb-4  mb-3">
                        <Col>
                            <Link to={`/dashboard`}>
                                <Button
                                    className="acceptBtn py-2 mx-4 px-4" onClick={acceptRequest}>
                                    Accept Request
                                </Button>
                            </Link>
                            <Link to="/dashboard">
                                <Button  className="rejectRequest mx-4 py-2 px-4" onClick={rejectClick}>
                                    Reject Request
                                </Button>
                            </Link>
                        </Col>
                    </Row>

                </Col>
            </Col>
        </Row>
    );
}

export default ViewRequest;
