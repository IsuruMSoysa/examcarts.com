import React, {FormEvent, useEffect, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import {Link, RouteComponentProps} from "react-router-dom";
import axios from "axios";
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';
import {IClassObj, Iexamins, IPaperDetails} from "../../../../Types/teacherTypes";

function UploadAnswers({ match }: RouteComponentProps<{}>) {
  const [viewExamDetails,setViewExamDetails] = useState<Iexamins>();
  const [examIdView,setExamIdView] = useState<string>('');
  const [studentID] = useState(localStorage.getItem('passedStudentID') || '0');


  useEffect(() => {
    let paramsID = JSON.stringify(match.params);
    let examIdViewV = (JSON.parse(paramsID)).id;
    setExamIdView(examIdViewV);
    getViewClassDetailSD(examIdViewV);
  }, []);

  const getViewClassDetailSD = (examIdViewR:string) => {
    axios.post('http://localhost:3001/getexampaperdetails', { examObjId : examIdViewR})
      .then(resp => {
        setViewExamDetails(resp.data.items);
        console.log(resp.data.items)
      })
      .catch(err =>{
        alert(err);
      })
  }

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [validated] = useState(false);
  const [fileInputState] = useState('');
  const [pdfFile,setPdfFile] = useState('');
  const [pdfFileError,setPdfFileError] = useState<string>('');
  const [viewPdf,setViewPdf] = useState('');
  const [uploaded,setUploaded] = useState<boolean>(false);


  const fileType = ['application/pdf'];
  const handlePdfFileChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
    event.preventDefault();
    if(event.target.files){
      const selectedFile = event.target.files[0];
      if(selectedFile){
        if(selectedFile && fileType.includes(selectedFile.type)){
          let reader = new FileReader();
          reader.readAsDataURL(selectedFile);
          reader.onloadend = () =>{
            if(reader.result){
              let convertResults = reader.result.toString();
              setPdfFile(convertResults);
              setPdfFileError('')
            }
          }
        }
        else {
          setPdfFileError("please select a valid file");
        }
      }
      else {
        console.log('select your file')
      }
    }
  }

  const handlePdfFileSubmit = (event:  FormEvent) => {
    event.preventDefault();
    if(pdfFile){
      setViewPdf(pdfFile);
    }
    else {
      return;
    }
  }

  const handleMarkingUpload = (event:FormEvent) => {
    event.preventDefault();
    if(!viewPdf) return;
    uploadPdf(viewPdf);
    setUploaded(true);
  }

  const uploadPdf  = async (base64EncodedImage:string) => {
    try {
      axios.post('http://localhost:3001/uploadanswers',
        {data:base64EncodedImage,  examDetailId : examIdView, studentId: studentID })
        .then(resp => {
          alert(resp.data.message);
        })
        .catch(err =>{
          console.log(err);
        })
    }
    catch (error){
      console.log(error);
    }
  }

  return (
    <Row className="classItemsContainer mx-4 my-4 py-1 p-4 ">

      <Col className=" text-center m-4 p-0">
        <Form noValidate validated={validated}>
          <div className="pb-4 pt-0">
            <h2><b>Submit Answers</b></h2>
            <h4>Exam Name : {viewExamDetails?.paperObjId.paperName}</h4>
          </div>

          <Row className="text-center py-4">
            <Col className="text-center" >
              <form className="uploadPdf p-3 m-3">
                <input type="file" name="image" className="img-input "
                       value={fileInputState}
                       onChange={handlePdfFileChange}/>
                <Button className="px-4 mx-4"  variant="outline-success" onClick={handlePdfFileSubmit}>
                  Upload Answer Document
                </Button>
              </form>
              <div className="pdf-container">
                {viewPdf ?
                  <>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                      <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]}/>
                    </Worker>
                  </>:<label>No Answer sheet Uploaded</label>
                }
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              {uploaded ?
                <Link to={`/dashboard/mypapers`}>
                  <Button className="px-4 mx-4"  type="submit"
                          variant="success"><b>Complete Submit Answer</b>
                  </Button>  </Link> :
                <Button className="px-4 mx-4"  type="submit"
                        onClick={handleMarkingUpload}
                        variant="success"><b>Confirm Details</b>
                </Button>
              }
              <Link to="/dashboard/student/">
                <Button
                  variant="secondary"
                  className="mx-4 px-4">
                  Back
                </Button>
              </Link>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
}

export default UploadAnswers;