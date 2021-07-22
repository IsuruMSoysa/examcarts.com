import React, {FormEvent, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import {Link, RouteComponentProps, useHistory} from "react-router-dom";
import axios from "axios";
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';

function CreatePaperForm({ match }: RouteComponentProps<{}>) {

  const history = useHistory();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [validated, setValidated] = useState(false);
  const [fileInputState,setFileInputState] = useState('');
  const [teacherID] = useState(localStorage.getItem('passedTeacherID'));
  const [paperName,setPaperName] = useState<string>('');
  const [hours,setHours] = useState<string>('');
  const [minutes,setMinutes] = useState<string>('');
  const [finalMarks,setFinalMarks] = useState<string>('');
  const [pdfFile,setPdfFile] = useState('');
  const [pdfFileError,setPdfFileError] = useState<string>('');
  const [viewPdf,setViewPdf] = useState('');
  const [paperId,setPaperId] = useState('');
  const [uploaded,setUploaded] = useState(false);

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

  const handlePaperUpload = (event:FormEvent) => {
    event.preventDefault();
    if(!viewPdf) return;
    uploadPdf(viewPdf);
  }

  let paperDetails = {
    teacherId : teacherID,
    paperName : paperName,
    hours : hours,
    minutes : minutes,
    finalMarks : finalMarks
  }

    const uploadPdf  = async (base64EncodedImage:string) => {
    try {
        axios.post('http://localhost:3001/createpaper',
          {data:base64EncodedImage,  paperDetails : paperDetails })
        .then(resp => {
          setPaperId(resp.data.uploadedPaper);
          setUploaded(true)
        })
        .catch(err =>{
          alert(err);
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
            <h2><b>Create Paper</b></h2>
          </div>
          <Row className="text-center pb-4 bg-white my-3 py-4">
            <Form.Group className="text-center" as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Paper Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Paper Name"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  getPaperName(event.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Time Duration</Form.Label>
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
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Final Marks</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Final Marks"
                  aria-describedby="inputGroupPrepend"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    getFinalMarks(event.target.value)}
                />
              </InputGroup>
            </Form.Group>
          </Row>

          <Row className="text-center py-4">
            <Col className="text-center" >
              <form className="uploadPdf p-3 m-3">
                <input type="file" name="image" className="img-input "
                       value={fileInputState}
                       onChange={handlePdfFileChange}/>
                <Button className="px-4 mx-4"  variant="outline-success" onClick={handlePdfFileSubmit}>
                  Upload Paper
                </Button>
              </form>
              <div className="pdf-container">
                {viewPdf ?
                  <>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                      <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]}/>
                  </Worker>
                  </>:<label>No Paper Uploaded</label>
                  }
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              {uploaded ?
                <Link to={`/dashboard/markingscheme/${paperId}`}>
                <Button className="px-4 mx-4"  type="submit"
                        variant="success"><b>Create Paper</b>
                </Button>  </Link> :
              <Button className="px-4 mx-4"  type="submit"
                      onClick={handlePaperUpload}
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

export default CreatePaperForm;