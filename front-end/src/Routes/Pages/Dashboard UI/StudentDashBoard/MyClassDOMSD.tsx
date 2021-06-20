import React, {Fragment, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import "../Styles/DashBord.scss"
import  {IClassObj} from  "../../../../Types/teacherTypes";
import axios from "axios";
import AddClassCardSD from "./AddClassCardSD";


function MyClassDOMSD(){
    return (
        <Container fluid className="classItemsContainer p-4 mt-2 ">
            <AddClassCardSD/>
        </Container>

    );
}

export default MyClassDOMSD;