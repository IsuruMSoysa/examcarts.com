import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Fragment, useState} from 'react';
import classImg from '../../../../assests/images/classImg.webp'
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import "../Styles/DashBord.scss"
import {Link} from "react-router-dom";
import ViewClass from "./ViewClass";
import  {IClassObj} from  "../../../../Types/teacherTypes";


type classCardTeacherProps = {
    title : string
    institute : string
    teacherId : string,
    description : string,
    admissionFee: string,
    monthlyFee: string,
    sendItems: (obj:IClassObj) => void
}

function ClassCardTeacher (props:classCardTeacherProps) {

        const classDetails = {
            className : props.title,
            teacherId : props.teacherId,
            educationInstitute : props.institute,
             description : props.description,
             admissionFee : props.admissionFee,
             monthlyFee : props.monthlyFee,
        }

    const handleViewClass = () => {
        return(
         props.sendItems(classDetails)),console.log(classDetails)
    }

    return (
            <Card style={{ width: '20em',height: '20em' }} className="classCard bg-light text-center m-3 p-2">
                <Card.Img variant="top" src={classImg} />
                <Card.Body className="pt-2">
                    <Card.Title><b>{props.title}</b></Card.Title>
                    <Card.Text>
                        <label>{props.institute}</label>
                    </Card.Text>
                    <Row>
                        <Col>
                            <label className="dueExamDate">Next Exam : 2021.08.10</label>
                        </Col>
                        <Col className="col-4">
                            <Link to="/dashboard/viewClass/">
                            <Button className="px-4" onClick={handleViewClass} variant="success">Visit</Button>
                            </Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
    );
}

export default ClassCardTeacher;