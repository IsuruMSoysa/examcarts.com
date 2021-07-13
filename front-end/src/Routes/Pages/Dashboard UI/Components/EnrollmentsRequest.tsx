import React, {FormEvent, useEffect, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Button, Col, Form, InputGroup, Row, Table} from "react-bootstrap";
import {Link, RouteComponentProps} from "react-router-dom";
import * as Icon from "react-feather";
import axios from "axios";
import ClassCardTeacher from "./ClassCardTeacher";
import {IenrollmentRequestTable} from "../../../../Types/teacherTypes";




function EnrollmentRequest({ match }: RouteComponentProps<{}>) {

    const [teacherID,setTeacherID] = useState(localStorage.getItem('passedTeacherID') || '0');
    const [enrollmentObj,setenrollmentObj] = useState<[IenrollmentRequestTable]| null>(
        [{
            studentId: '',
            classId: '',
            teacherId: '',
            receiptNo: '',
            bankName: '',
            branchName: '',
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            address: '',
            imageId: '',
            ImgUrl: '',
            UploadedTime: '',
    }]);

    useEffect(() => {
        getAllEnrollmentRequests();
    }, []);


    const getAllEnrollmentRequests = () => {
        let teacherClassReq = {teacherIdNum: teacherID};
        axios.post("http://localhost:3001/getenrollmentrequests",teacherClassReq)
            .then(resp => {
                console.log(resp.data.items);
                setenrollmentObj(resp.data.items);
            })
            .catch(err =>{
                alert(err);
            })
    }

    const showEnrollmentRequests = () => {
        if (enrollmentObj === null) {
            return;
        }
        else    {
            return enrollmentObj.map((e) => {
                return (
                        <tr>
                            <td>{e.firstName} {e.lastName}</td>
                            <td>{e.classId}</td>
                            <td>{e.UploadedTime}</td>
                            <td></td>
                        </tr>
                    );
                })
            }
    }


    return (
     <Row className="classItemsContainer mx-4 my-4 py-1 p-4 ">
         <Col>
             <Row>
                 <Col className="text-center py-1 my-3">
                     <h2>Enrollment Requests</h2>
                 </Col>
             </Row>
             <Row>
                 <Col>
                     <Table striped bordered hover size="sm">
                         <thead>
                         <tr>
                             <th>Student Name</th>
                             <th>Class</th>
                             <th>Time</th>
                             <th></th>
                         </tr>
                         </thead>
                         <tbody>
                            {showEnrollmentRequests()}
                         </tbody>
                     </Table>
                 </Col>
             </Row>
         </Col>

    </Row>
    );
}

export default EnrollmentRequest;
