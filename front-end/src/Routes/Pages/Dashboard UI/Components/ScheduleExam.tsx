import React, {FormEvent, useEffect, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import { RouteComponentProps,Link} from "react-router-dom";
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Select from 'react-select';
import {IInsttArr, ISelectClass} from "../../../../Types/teacherTypes";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as Icon from "react-feather";
import TimePicker, {TimePickerValue} from 'react-time-picker';


function ScheduleExam({ match }: RouteComponentProps<{}>) {

  const [validated, setValidated] = useState(false);
  const [fileInputState,setFileInputState] = useState('');
  const [teacherID] = useState(localStorage.getItem('passedTeacherID'));
  const [examName,setExamName] = useState<string>('');
  const [hours,setHours] = useState<string>('');
  const [minutes,setMinutes] = useState<string>('');
  const [finalMarks,setFinalMarks] = useState<string>('');
  const [selecetedClass,setSelecetedClass] = useState<string>('');
  const [selecetedPaper,setSelecetedPaper] = useState<string>('');
  const [selecetedInstructors,setSelecetedInstructors] = useState<[string | null]>(['']);
  const [classSelect,setClassSelect] = useState<[ISelectClass]>();
  const [paperSelect,setPaperSelect] = useState<[ISelectClass]>();
  const [instructorSelect,setInstructorSelect] = useState<[ISelectClass]>();
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());
  const [scheduled, setScheduled] = useState<boolean>(false);

  useEffect(() => {
    getSelectOptions();
  }, []);


  const getSelectOptions = () => {
    let teacherClassReq = {teacherIdNum: teacherID};
    axios.post("http://localhost:3001/getclasses/examcreate",teacherClassReq)
      .then(resp => {
        setClassSelect(resp.data.classToSelect);
        setPaperSelect(resp.data.papersToSelect);
        setInstructorSelect(resp.data.instructorToSelect);
      })
      .catch(err =>{
        alert(err);
      })
  }

  // @ts-ignore
  const getSelectedClass = item => {
    setSelecetedClass(item.value);
  }

  // @ts-ignore
  const getSelectedPaper = item => {
    setSelecetedPaper(item.value);
  }

  // @ts-ignore
  const getSelecetedInstructors = item => {
   setSelecetedInstructors(item);
  }

  const getExamName = (name: string) => {
    setExamName(name);
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

  const handleScheduleExam = () => {
    let examDetails = {
      examNameS: examName,
      classObjIdS : selecetedClass,
      paperObjIdS : selecetedPaper,
      instructorsS : selecetedInstructors,
      startTimeS : startTime,
      endTimeS : endTime,
      teacherIDS : teacherID
    }
    axios.post("http://localhost:3001/scheduleexam",examDetails)
      .then(resp => {
        console.log(resp.data.message);
        setScheduled(true)
      })
      .catch(err =>{
        alert(err);
      })
    console.log(examDetails);
  }

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
                placeholder="Exam Name"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  getExamName(event.target.value)}
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
            <Form.Group className="text-center" as={Col} md="6" controlId="validationCustom01">
              <Form.Label>Start Date</Form.Label><br/>
              <DatePicker
                className="datepicker py-1 px-4 text-center mx-2"
                selected={startTime}
                onChange={(date:Date) => setStartTime(date)}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
              />
              <Icon.Calendar size='1em'/>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom02">
              <Form.Label>Finish Time</Form.Label><br/>
                <DatePicker
                  selected={endTime}
                  className="datepicker py-1 px-4 text-center mx-2"
                  onChange={(date:Date) => setEndTime(date)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
                <Icon.Calendar size='1em'/>
            </Form.Group>
          </Row>

          <Row className="text-center pb-4 bg-white px-4 py-4">
            <Col  className="text-center mx-4">
                <Form.Label>Instructors</Form.Label>
                <Select options={instructorSelect}
                        isMulti
                        defaultValue={['']}
                        onChange={getSelecetedInstructors} />
            </Col>
          </Row>

          <Row className="text-center py-4">
            <Col className="text-center" >
              <form className="uploadPdf p-3 m-3">
                {
                  scheduled ?
                    <Button className="px-4 mx-4"  variant="outline-success">
                     Go to Upcoming Exams
                    </Button> :
                    <Link to="/dashboard/upcomingexams">
                      <Button className="px-4 mx-4"  variant="success"
                              onClick={handleScheduleExam}>
                        Schedule Exam
                      </Button>
                    </Link>
                }
              </form>
            </Col>
          </Row>

        </Form>
      </Col>
    </Row>
  );
}

export default ScheduleExam;