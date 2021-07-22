import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import classImg from '../../../../assests/images/classImg.webp'
import {Button, Card, Col, Row} from "react-bootstrap";
import "../Styles/DashBord.scss"
import {Link} from "react-router-dom";

type paperCardTeacherProps = {
  title : string,
  hours : string,
  minutes : string,
  marks : string,
}

function PaperCardTeacher (props:paperCardTeacherProps) {

  const classDetails = {
    title : props.title,
    hours : props.hours,
    minutes : props.minutes,
    marks : props.marks
  }

  // const handleViewClass = () => {
  //   return(
  //     props.sendItems(classDetails)),console.log(classDetails)
  // }

  return (
    <Card style={{ width: '20em',height: '20em' }} className="classCard bg-light text-center m-3 p-2">
      <Card.Img variant="top" src={classImg} />
      <Card.Body className="pt-2">
        <Card.Title><b>{props.title}</b></Card.Title>
        <Card.Text>
          <label>{props.hours} hours and {props.minutes} minutess</label>
        </Card.Text>
        {/*<Row>*/}
        {/*  <Col className="col-4">*/}
        {/*    <Link to="/dashboard/viewClass/">*/}
        {/*      <Button className="px-4" */}
        {/*              onClick={handleViewClass} */}
        {/*              variant="success">Visit</Button>*/}
        {/*    </Link>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
      </Card.Body>
    </Card>
  );
}

export default PaperCardTeacher;