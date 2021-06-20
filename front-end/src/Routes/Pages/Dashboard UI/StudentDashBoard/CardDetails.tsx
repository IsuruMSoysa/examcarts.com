import React, {FormEvent, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Button, Card, Col, Dropdown, Form, InputGroup, Row} from "react-bootstrap";
import "./DashboardSD.scss"
import {Link} from "react-router-dom";
import ViewClassSD from "./ViewClassSD";
import axios from "axios";

type CardDetailsProps = {
    classToEnroll:string
}


function CardDetails(props:CardDetailsProps) {
    const [validated, setValidated] = useState(false);
    const [studentID,setStudentID] = useState(localStorage.getItem('passedStudentID'));

    const payNow = () => {
        let addClassReq = {studentID: studentID, classTitle : props.classToEnroll };
        axios.post("http://localhost:3001/enrollclass",addClassReq)
            .then(resp => {
                // setClassObj(resp.data.items);
                console.log(resp.data.message);
            })
            .catch(err =>{
                alert(err);
            })
    }


    const handleSubmit = (event: FormEvent) => {
        const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        // }
        //
        // setValidated(true);
    };


    return (
        <Row className="classItemsContainer mx-4 my-4 py-4 p-4 ">
            <Col className=" text-center m-4 p-4">
             <Form noValidate validated={validated} onSubmit={handleSubmit}>
                 <div className="pb-4 pt-1">
                     <h2><b>Payment Details</b></h2>
                 </div>
            <Row className="text-center pb-4 bg-white my-3 py-4">
                <Form.Group className="text-center" as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Card Number"
                    />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Express</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Express"

                    />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>CSC</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="text"
                            placeholder="CSC"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"

                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"

                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>E mail</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="E mail"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="Mobile Number" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid state.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid zip.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3">
                <Form.Check
                    required
                    label="Pay Both Admission and First Month Fee"
                    feedback="You must agree before submitting."
                />
                <Form.Check
                    required
                    label="Ship to billing Address"
                    feedback="You must agree before submitting."
                />
            </Form.Group>
                 <Link to="/dashboard/student">
                     <Button className="px-4" onClick={payNow} type="submit" variant="success"><b>Pay Now</b></Button>
                 </Link>
                 <Link to="/dashboard/student/addclass/viewclass">
                     <Button  className="createBtnCancel mx-4 py-2 px-4">
                         Back
                     </Button>
                 </Link>


        </Form>
            </Col>
        </Row>
    );
}

export default CardDetails;
