import React, { useEffect, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Button, Col, Row, Table} from "react-bootstrap";
import {Link, RouteComponentProps} from "react-router-dom";
import axios from "axios";
import {IenrollmentRequestTable} from "../../../../Types/teacherTypes";




function EnrollmentRequest({ match }: RouteComponentProps<{}>) {

    const [teacherID] = useState(localStorage.getItem('passedTeacherID') || '0');
    const [enrollmentObj,setenrollmentObj] = useState<[IenrollmentRequestTable]| null>(
        [{
            _id:'',
            studentId: {
                _id:'',
                fullName:'',
                mobile:'',
                email:'',
                username:'',
                password:''
            },
            classId: {
                className: '',
                teacherId:'',
                educationInstitute: '',
                description: '',
                admissionFee: '',
                monthlyFee: '',
                _id: ''},
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
    }]
    );

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
        if (enrollmentObj== null) {
            return;
        }
        else {
            return enrollmentObj.map((e) => {

                return (
                            <tr>
                                <td>{e.firstName} {e.lastName}</td>
                                <td>{e.classId.className}</td>
                                <td>{e.UploadedTime}</td>
                                <td>
                                    <Row>
                                        <Col className="text-center">
                                            <Link to={`/dashboard/viewRequest/${e._id}`}>
                                                <Button className="px-4"
                                                        variant="success">View
                                                </Button>
                                            </Link>
                                        </Col>
                                    </Row>
                                </td>
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
                     <Table variant="dark" striped bordered hover size="sm">
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
             {/*<Row>*/}
             {/*    <iframe width="1140" height="541.25"*/}
             {/*            src="https://app.powerbi.com/reportEmbed?reportId=6dab0a91-08a1-4792-a0a3-51084065d221&autoAuth=true&ctid=aa232db2-7a78-4414-a529-33db9124cba7&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D"*/}
             {/*            frameBorder="0" ></iframe>*/}
             {/*</Row>*/}
         </Col>

    </Row>
    );
}

export default EnrollmentRequest;
