import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import classImg from '../../../../assests/images/classImg.webp'
import {Button, Card, Col, Row} from "react-bootstrap";
import "../Styles/DashBord.scss"
import "./DashboardSD.scss"
import {Link} from "react-router-dom";

type classCardTeacherProps = {
    title : string
    institute : string
    teacherId : string,
    description : string,
    admissionFee: string,
    monthlyFee: string,
    _id : string,
    // sendItems: (obj:IClassObj) => void
    // passClickedClassId : (_id:string) => void
}

function MyClassCard (props:classCardTeacherProps) {

    return (
        <Card style={{ width: '20em',height: '20em' }} className="classCardSD text-center bg-light m-3 p-2">
            <Card.Img variant="top" src={classImg} />
            <Card.Body className="pt-2">
                <Card.Title><b>{props.title}</b></Card.Title>
                <Card.Text>
                    <label>{props.institute} : Rs.{props.monthlyFee} </label>
                </Card.Text>
                <Row>
                    <Col>
                        <label className="dueExamDate">Next Exam : 2021.08.10</label>
                    </Col>
                    <Col className="col-4">
                        <Link to={`/dashboard/student/addclass/viewClass/${props._id}`}>
                            <Button
                                // onClick={passClickedClassDetails}
                                className="px-3 mr-4" variant="success">Visit</Button>
                        </Link>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default MyClassCard;