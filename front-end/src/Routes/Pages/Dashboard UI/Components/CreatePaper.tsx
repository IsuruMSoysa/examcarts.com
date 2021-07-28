import React, {useEffect, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {RouteComponentProps} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import CreatePaperCard from "./CrreatePaperCard";
import {IPaperDetails} from "../../../../Types/teacherTypes";
import axios from "axios";
import PaperCardTeacher from "./PaperCardTeacher";

function CreatePaper({ match }: RouteComponentProps<{}>) {
  //logged ID
  const [teacherID] = useState(localStorage.getItem('passedTeacherID') || '0');
  const [paperObj,setPaperObj] = useState<IPaperDetails[] | null>([]);

  //get all papers when load the component
  useEffect(() => {
    getAllPaper();
  }, []);

  //get all papers function
  const getAllPaper = () => {
    let teacherPaperReq = {teacherIdNum: teacherID};
    axios.post("http://localhost:3001/getpapers",teacherPaperReq)
      .then(resp => {
        setPaperObj(resp.data.items);
        console.log(resp.data.items);
      })
      .catch(err =>{
        alert(err);
      })
  }

  //show class cards
  const showPaperCards = () => {
    if (paperObj === null) {
      return;
    }
    return paperObj.map((e) => {
      return <PaperCardTeacher
        title = {e.paperName}
        hours = {e.hours}
        minutes = {e.minutes}
        marks = {e.finalMarks}
      />
    })
  };

  return (
    <Row>
          <Col className="text-center py-2">
            <h2>My Papers</h2>
          </Col>
         <Container className="classItemsContainer p-4 mt-2 ">
           <CreatePaperCard/>
           <>
             {showPaperCards()}
           </>
         </Container>
    </Row>
  );
}

export default CreatePaper;
