import React, {FormEvent, useEffect, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import {Link, RouteComponentProps} from "react-router-dom";
import axios from "axios";
import {IBankSlipDetails, IClassObj} from "../../../../Types/teacherTypes";
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';


function CreatePaperForm({ match }: RouteComponentProps<{}>) {

  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [validated, setValidated] = useState(false);
  const [confirmDetails, setConfirmDetails] = useState(false);
  const [fileInputState,setFileInputState] = useState('');
  const [previewSource,setPreviewSource] = useState<string | null>();
  const [classToEnroll, setClassToEnroll] = useState<IClassObj | null>();
  const [payAmount,setPayAmount] = useState<number>()
  const [studentID,setStudentID] = useState(localStorage.getItem('passedStudentID'));
  const [EReceiptNo,setReceiptNo] = useState<string>('');
  const [EbankName,setBankName] = useState<string>('');
  const [EbranchName,setBranchName] = useState<string>('');
  const [EfirstName,setFirstName] = useState<string>('');
  const [ElastName,setLastName] = useState<string>('');
  const [Eemail,setEmail] = useState<string>('');
  const [Emobile,setMobile] = useState<string>('');
  const [Eaddress,setAddress] = useState<string>('');


  const [pdfFile,setPdfFile] = useState('');
  const [pdfFileError,setPdfFileError] = useState<string>('');

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
              console.log(convertResults);
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


  const [viewPdf,setViewPdf] = useState('');

  const [bankSlipDetails,setBankSlipDetails] = useState<IBankSlipDetails>();
  const [classIdView,setClassIdView] = useState<string>('');




  const getReceiptNoInput = (name: string) => {
    setReceiptNo(name);
  }

  const getBankNameInput = (name: string) => {
    setBankName(name);
  }
  const getBranchNameInput = (name: string) => {
    setBranchName(name);
  }
  const getFirstNameInput = (name: string) => {
    setFirstName(name);
  }
  const getLastNameInput = (name: string) => {
    setLastName(name);
  }
  const getEmailInput = (name: string) => {
    setEmail(name);
  }
  const getMobileInput = (name: string) => {
    setMobile(name);
  }
  const getAddressInput = (name: string) => {
    setAddress(name);
  }

  const handlePaperUpload = (event:FormEvent) => {
    event.preventDefault();
    if(!viewPdf) return;
    uploadPdf(viewPdf);
  }

    const uploadPdf  = async (base64EncodedImage:string) => {
    try {
        axios.post('http://localhost:3001/createpaper',{data:base64EncodedImage})
        .then(resp => {
          console.log(resp.data);
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
                  getReceiptNoInput(event.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Time Duration</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Time Duration"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  getBankNameInput(event.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Final Marks</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Final Marks"
                  aria-describedby="inputGroupPrepend"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    getBranchNameInput(event.target.value)}
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
                  Upload PDF
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
              <Link to={`/dashboard/student/enrollpending/${classIdView}`}>
                <Button className="px-4 mx-4"  type="submit"
                        onClick={handlePaperUpload}
                        variant="success"><b>Create Paper</b></Button>
              </Link>
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