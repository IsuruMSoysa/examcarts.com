import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Fragment } from 'react';
import classImg from '../../../../assests/images/classImg.webp'
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import "../Styles/DashBord.scss"
import ClassCardTeacher from "./ClassCardTeacher";
import CreateClassCard from "./CreateClassCard";



const MyClassDOM: React.FC = () => {
    return (
        <Container fluid className="classItemsContainer p-4 mt-2 ">
            <CreateClassCard/>
            <ClassCardTeacher/>
            <ClassCardTeacher/>
            {/*<ClassCardTeacher/>*/}
            {/*<ClassCardTeacher/>*/}
            {/*<ClassCardTeacher/>*/}
            {/*<ClassCardTeacher/>*/}
            {/*<ClassCardTeacher/>*/}
            {/*<ClassCardTeacher/>*/}
            {/*<ClassCardTeacher/>*/}
            {/*<ClassCardTeacher/>*/}
        </Container>

    );
}

export default MyClassDOM;