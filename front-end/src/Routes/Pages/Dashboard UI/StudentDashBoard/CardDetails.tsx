import React, {FormEvent, useEffect, useState} from 'react';
import "../../../../assests/styles/main.scss"
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import "./DashboardSD.scss"
import {Link, RouteComponentProps} from "react-router-dom";
import axios from "axios";
import {IBankSlipDetails, IClassObj} from "../../../../Types/teacherTypes";


function CardDetails({ match }: RouteComponentProps<{}>) {
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

    const [bankSlipDetails,setBankSlipDetails] = useState<IBankSlipDetails>();
    const [classIdView,setClassIdView] = useState<string>('');

    useEffect(() => {
        let paramsID = JSON.stringify(match.params);
        let classIdViewV = (JSON.parse(paramsID)).id;
        setClassIdView(classIdViewV);
        getViewClassDetailSD(classIdViewV);
    }, []);

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



    useEffect(() => {
        let paramsID = JSON.stringify(match.params);
        let classIdEnroll = (JSON.parse(paramsID)).id;
        getViewClassDetailSD(classIdEnroll);
    }, []);

    const calculateFeeAmount = (admissionFee:string|null,monthlyFee:string|null) => {
            if(admissionFee && monthlyFee){
                let payVal = parseInt(admissionFee) + parseInt(monthlyFee);
                setPayAmount(payVal);
            }
            else setPayAmount(0);
    }

    const getViewClassDetailSD = (classIdViewR:string) => {
        axios.post('http://localhost:3001/getViewClassDetailSD', { classId : classIdViewR})
            .then(resp => {
                setClassToEnroll(resp.data.items);
                calculateFeeAmount(resp.data.items.admissionFee,resp.data.items.monthlyFee);
                console.log(resp.data.items);
            })
            .catch(err =>{
                alert(err);
            })
    }

    const handleReceiptUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if(event.target.files){
        const file = event.target.files[0];
            previewFile(file);
        }
    }

    const previewFile = (file:Blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            if(reader.result){
                let convertResults = reader.result.toString();
                setPreviewSource(convertResults);
            }
        }
    }

    const handleSenReceipt = (event:FormEvent) => {
        event.preventDefault();
        if(!previewSource) return;
        uploadImage(previewSource);
        handleConfirmBtn();
    }

    let bankSlipDetailsObj = {
            studentId : studentID,
            classId : classIdView,
            receiptNo : EReceiptNo,
            bankName : EbankName ,
            branchName : EbranchName,
            firstName : EfirstName,
            lastName : ElastName,
            email : Eemail,
            mobile: Emobile,
            address : Eaddress
    };

    const uploadImage  = async (base64EncodedImage:string) => {
        try {
             // let result = await
             //    fetch('http://localhost:3001/api/upload',{
             //    method : 'POST',
             //    body: JSON.stringify({
             //         data: base64EncodedImage}),
             //    headers:{
             //        'Content-type' : 'application/json'},
             //    }
             //    )
             // ;
            axios.post('http://localhost:3001/api/upload',{data:base64EncodedImage,item:bankSlipDetailsObj})
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

    const handleConfirmBtn = () => {
        setConfirmDetails(true);
    }

    return (
        <Row className="classItemsContainer mx-4 my-4 py-1 p-4 ">
            <Col className=" text-center m-4 p-0">
             <Form noValidate validated={validated}>
                 <div className="pb-4 pt-0">
                     <h2><b>{classToEnroll?.className}</b></h2>
                     <h2><b>Payment Details</b></h2>
                     <h3>Amount : Rs.{payAmount}.00 </h3>
                 </div>
            <Row className="text-center pb-4 bg-white my-3 py-4">
                <Form.Group className="text-center" as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Receipt Number</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Receipt Number"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            getReceiptNoInput(event.target.value)}
                    />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Bank</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Bank"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            getBankNameInput(event.target.value)}
                    />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>Branch Name</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="text"
                            placeholder="Branch Name"
                            aria-describedby="inputGroupPrepend"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                getBranchNameInput(event.target.value)}
                        />
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            getFirstNameInput(event.target.value)}
                    />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                            getLastNameInput(event.target.value)}
                    />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>E mail</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="E mail"
                            aria-describedby="inputGroupPrepend"
                            required
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                getEmailInput(event.target.value)}
                        />
                    </InputGroup>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Address"
                                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                      getAddressInput(event.target.value)}
                                  required />
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text"
                                  placeholder="Mobile Number"
                                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                      getMobileInput(event.target.value)}
                                  required />
                </Form.Group>
                    </Row>
                 <Row className="text-center py-4">
                     <Col className="text-center" >
                         <form>
                             <input type="file" name="image" className="img-input "
                                    value={fileInputState}
                                    onChange={handleReceiptUpload}/>
                         </form>
                         {(previewSource) ? (
                             <img
                                 className="py-4 "
                                 src={previewSource}
                                 alt="chosen"
                                 style={{height:'300px'}}
                             />
                         ): null}
                     </Col>

                 </Row>

                     <Button className="px-4 mx-4"  type="submit"
                             onClick={handleSenReceipt}
                             variant="outline-success" hidden={confirmDetails}><b>Confirm Details</b></Button>

                 <Link to={`/dashboard/student/enrollpending/${classIdView}`}>
                 <Button className="px-4 mx-4"  type="submit"
                         variant="success"><b>Pay Now</b></Button>
                 </Link>
                 <Link to="/dashboard/student/">
                     <Button
                         variant="secondary"
                         className="mx-4 px-4">
                         Back
                     </Button>
                 </Link>
            </Form>
            </Col>
        </Row>
    );
}

export default CardDetails;