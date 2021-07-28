import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import classImg from '../../../../assests/images/classImg.webp'
import {Card} from "react-bootstrap";
import "../Styles/DashBord.scss"

//define types
type paperCardTeacherProps = {
  title : string,
  hours : string,
  minutes : string,
  marks : string,
}

function PaperCardTeacher (props:paperCardTeacherProps) {
  return (
    <Card style={{ width: '20em',height: '20em' }} className="classCard bg-light text-center m-3 p-2">
      <Card.Img variant="top" src={classImg} />
      <Card.Body className="pt-2">
        <Card.Title><b>{props.title}</b></Card.Title>
        <Card.Text>
          <label>{props.hours} hours and {props.minutes} minutess</label>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PaperCardTeacher;