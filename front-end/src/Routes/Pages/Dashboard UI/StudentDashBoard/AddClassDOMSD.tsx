import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Fragment, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import "./DashboardSD.scss"
import  {IClassObj} from  "../../../../Types/teacherTypes";
import * as Icon from 'react-feather';
import axios from "axios";
import ClassCardTeacher from "../Components/ClassCardTeacher";
import ClassCardStudent from "./ClassCardStudent";


type MyClassDOMSDprops = {
    passClickedClass : (title:String) => void
}

function AddClassDOMSD(props:MyClassDOMSDprops){
    const [allClassObj,setAllClassObj] = useState<IClassObj[] | null>([]);


    useEffect(() => {
        getAllClasses();
    }, []);

    const getAllClasses = () => {
        axios.post("http://localhost:3001/getallclasses")
            .then(resp => {
                setAllClassObj(resp.data.items);
            })
            .catch(err =>{
                alert(err);
            })
    }

    const showAllClassCards = () => {
        if (allClassObj === null) {
            return;
        }
        return allClassObj.map((e) => {
            return <ClassCardStudent
                title={e.className}
                teacherId={e.teacherId}
                description={e.description}
                admissionFee={e.admissionFee}
                monthlyFee={e.monthlyFee}
                institute={e.educationInstitute}
                passClickedClassId = {props.passClickedClass}
                _id = {e._id}
            />
        })
    };

    return (

        <Container fluid className="p-4 mt-2 ">
            {/*{console.log(allClassObj)}*/}
            <Row>
                <Col>
                    <Row className="mx-4 px-4">
                        <Col className="mx-4 px-4">
                            <Form className="mx-4 px-4">
                                <Row className="text-center">
                                    <Col className="">
                                        <FormControl type="text" placeholder="      Search Classes Here..." className="searchBox mr-sm-2" />
                                    </Col>
                                    <Col className="col-2 px-1">
                                        <Button variant="outline-success"><Icon.Search/></Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                    <Row className="py-4 my-4">
                        <Col className="classItemsContainer">
                            <React.Fragment >
                                {showAllClassCards()}
                            </React.Fragment>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default AddClassDOMSD;