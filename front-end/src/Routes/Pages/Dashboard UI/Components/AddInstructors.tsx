import React, {useEffect, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Button, Col, Row, Table} from "react-bootstrap";
import {Link, RouteComponentProps} from "react-router-dom";
import axios from "axios";
import {IInstructorDetails} from "../../../../Types/teacherTypes";

function EnrollmentRequest({ match }: RouteComponentProps<{}>) {

  const [instructorObj,setInstructorObj] = useState<[IInstructorDetails]>()

  useEffect(() => {
    getAllInstructors();
  }, []);


  const getAllInstructors = () => {
    axios.post("http://localhost:3001/getallinstructors")
      .then(resp => {
        console.log(resp.data.items);
        setInstructorObj(resp.data.items);
      })
      .catch(err =>{
        alert(err);
      })
  }


  const showAllInstructors = () => {
    if (instructorObj== null) {
      return;
    }
    else {
      return instructorObj.map((e) => {

        return (
          <tr>
            <td>{e.fullName}</td>
            <td>{e.mobile}</td>
            <td>{e.email}</td>
            <td>
              <Row>
                <Col className="text-center">
                  <Link to={`/dashboard/myinstructors/${e._id}`}>
                    <Button className="px-4"
                            variant="success">Add
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
            <h2>Add Instructors</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table variant="dark" striped bordered hover size="sm">
              <thead>
              <tr>
                <th>Instructor Name</th>
                <th>Mobile Number</th>
                <th>E mail</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              {showAllInstructors()}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Col>

    </Row>
  );
}

export default EnrollmentRequest;
