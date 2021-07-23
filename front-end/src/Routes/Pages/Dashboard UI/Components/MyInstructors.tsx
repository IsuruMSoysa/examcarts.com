import React, {FormEvent, useEffect, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Button, Col, Row, Table} from "react-bootstrap";
import {Link, RouteComponentProps} from "react-router-dom";
import axios from "axios";
import {IInstructorDetails} from "../../../../Types/teacherTypes";

function MyInstructors({ match }: RouteComponentProps<{}>) {
  const [addInstructoeId,setaddInstructoeId] = useState<string>('');
  const [receiptDecision,setReceiptDecision] = useState<string>('');
  const [instReqArr,setInstReqArr] = useState<[IInstructorDetails]>();
  const [teacherID] = useState(localStorage.getItem('passedTeacherID') || '0');

  useEffect(() => {
    let paramsID = JSON.stringify(match.params);
    let reqIdViewV = (JSON.parse(paramsID)).id;
    setaddInstructoeId(reqIdViewV);
    if(reqIdViewV){
      sendRequestToInstructor(reqIdViewV);
    }
    getTeacherInstructors();
  }, []);

  const sendRequestToInstructor = (reqIdViewR:string) => {
    axios.post('http://localhost:3001/sendRequestToInstructor',
      { reqInstructId : reqIdViewR, teacherObjID : teacherID})
      .then(resp => {
        // setViewRequestDetails(resp.data.items);
        console.log(resp.data.message)
      })
      .catch(err =>{
        alert(err);
      })
  }

  // useEffect(() => {
  //   getAllInstructors();
  // }, []);
  //
  //
  const getTeacherInstructors = () => {
    axios.post("http://localhost:3001/getTeacherInstructors",{teacherObjId:teacherID})
      .then(resp => {
         setInstReqArr(resp.data.instructorRequests);
      })
      .catch(err =>{
        alert(err);
      })
  }


  const showEnrollmentRequests = () => {
    if (instReqArr== null) {
      return;
    }
    else {
      return instReqArr.map((e) => {

        return (
          <tr>
            <td>{e.fullName}</td>
            <td>{e.mobile}</td>
            <td>{e.email}</td>
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
            <h2>My Instructors</h2>
          </Col>
        </Row>
        <Row>
          <Col className="text-center pb-3 my-3">
            <Link to={"/dashboard/getinstructors"}>
              <Button className="px-4 mx-4"  type="submit"
                      variant="success"><b>Add Instructor</b></Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="py-2">
            <h5>Pending Requests</h5>
          </Col>
        </Row>
        <Row>
          <Col>

            <Table striped bordered hover size="sm">
              <thead>
              <tr>
                <th>Instructor Name</th>
                <th>Mobile Number</th>
                <th>E mail</th>
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

export default MyInstructors;
