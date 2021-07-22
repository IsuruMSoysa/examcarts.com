import React, {FormEvent, useEffect, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import { RouteComponentProps} from "react-router-dom";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Select from 'react-select';
import {ISelectClass} from "../../../../Types/teacherTypes";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Icon from "react-feather";

function ScheduleExam({ match }: RouteComponentProps<{}>) {

  const [validated, setValidated] = useState(false);
  const [fileInputState,setFileInputState] = useState('');
  const [teacherID] = useState(localStorage.getItem('passedTeacherID'));
  const [paperName,setPaperName] = useState<string>('');
  const [hours,setHours] = useState<string>('');
  const [minutes,setMinutes] = useState<string>('');
  const [finalMarks,setFinalMarks] = useState<string>('');
  const [selecetedClass,setSelecetedClass] = useState<string>('');
  const [selecetedPaper,setSelecetedPaper] = useState<string>('');
  const [classSelect,setClassSelect] = useState<[ISelectClass]>();
  const [paperSelect,setPaperSelect] = useState<[ISelectClass]>();
  const [startDate, setStartDate] = useState<Date>(new Date());

  useEffect(() => {
    getSelectOptions();
  }, []);


  const getSelectOptions = () => {
    let teacherClassReq = {teacherIdNum: teacherID};
    axios.post("http://localhost:3001/getclasses/examcreate",teacherClassReq)
      .then(resp => {
        setClassSelect(resp.data.classToSelect);
        setPaperSelect(resp.data.papersToSelect);
      })
      .catch(err =>{
        alert(err);
      })
  }
  // @ts-ignore
  const getSelectedClass = item => {
    setSelecetedClass(item.value);
    console.log(selecetedClass)
  }

  // @ts-ignore
  const getSelectedPaper = item => {
    setSelecetedPaper(item.value);

  }

  const getPaperName = (name: string) => {
    setPaperName(name);
  }
  const getHours = (name: string) => {
    setHours(name);
  }
  const getMinutes = (name: string) => {
    setMinutes(name);
  }
  const getFinalMarks = (name: string) => {
    setFinalMarks(name);
  }

  const classOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla'}
  ]

  return (
    <Row className="classItemsContainer mx-4 my-4 py-1 p-4 ">
      <Col className=" text-center m-4 p-0">
        <Form noValidate validated={validated}>
          <div className="pb-4 pt-0">
            <h2><b>Schedule Exam</b></h2>
          </div>
          <Row className="text-center pb-4 bg-white mt-3 py-4">
            <Form.Group className="text-center" as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Exam Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Paper Name"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  getPaperName(event.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Select Class</Form.Label>
              <Row>
                <Col>
                  <Select options={classSelect} onChange={getSelectedClass} />
                </Col>
              </Row>

            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Select Paper</Form.Label>
              <Select options={paperSelect} onChange={getSelectedPaper} />
            </Form.Group>
          </Row>


          <Row className="text-center pb-4 bg-white py-4">
            <Form.Group className="text-center" as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Schedule Date</Form.Label><br/>
              <DatePicker className="datepicker py-1 px-4 text-center mx-2" selected={startDate} onChange={(date:Date) => setStartDate(date)} />
              <Icon.Calendar size='1em'/>
              {/*<Form.Control*/}
              {/*  required*/}
              {/*  type="text"*/}
              {/*  placeholder="Paper Name"*/}
              {/*  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>*/}
              {/*    getPaperName(event.target.value)}*/}
              {/*/>*/}
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Start Time</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Hours"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      getHours(event.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Minutes"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      getMinutes(event.target.value)}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Start Time</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Hours"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      getHours(event.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Minutes"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      getMinutes(event.target.value)}
                  />
                </Col>
              </Row>
            </Form.Group>
          </Row>


          <Row className="text-center py-4">
            <Col className="text-center" >
              <form className="uploadPdf p-3 m-3">
                <Button className="px-4 mx-4"  variant="outline-success"
                        // onClick={handlePdfFileSubmit}
                >
                  Upload Paper
                </Button>
              </form>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default ScheduleExam;