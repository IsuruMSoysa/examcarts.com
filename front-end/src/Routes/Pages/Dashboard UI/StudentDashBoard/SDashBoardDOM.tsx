import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Fragment, useState} from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";
import Footer from "../../Landing Page/Components/Footer";
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import ViewClass from "../Components/ViewClass"
import  {IClassObj} from  "../../../../Types/teacherTypes";
import DashBoardNav from "../Components/DashBoardNav";
import SideMenuSD from "./SideMenuSD";
import MyClassDOMSD from "./MyClassDOMSD";
import AddClassDOMSD from "./AddClassDOMSD";
import ViewClassSD from "./ViewClassSD";
import axios from "axios";
import CardDetails from "./CardDetails";


const SDashBoardDOM: React.FC = () => {

    const [title,setTitle] = useState('');
    const [institute,setInstitute] = useState('');
    const [teacherId,setTeacherId] = useState('');
    const [description,setDescription] = useState('');
    const [admissionFee,setAdmissionFee] = useState('');
    const [monthlyFee,setMonthlyFee] = useState('');
    const [enrollments,setEnrollments] = useState(0);
    const [classToEnroll,setClassToEnroll] = useState('');


    const findClickedClass =  (title:String) => {
       let reqObj = { title : title }
        axios.post("http://localhost:3001/findclickedclass",reqObj)
            .then(resp => {
            //    assignClassPropsSD(resp.data.title)
                console.log(resp.data.items)
                assignClassPropsSD(resp.data.items)
            })
            .catch(err =>{
                alert(err);
            })
    }

    const passClassToEnroll = (classTitle: string) => {
        setClassToEnroll(classTitle);
    }

    const assignClassPropsSD = (propObj:IClassObj) => {
        setTitle(propObj.className);
        setInstitute(propObj.educationInstitute);
        setTeacherId(propObj.teacherId);
        setDescription(propObj.description);
        setAdmissionFee(propObj.admissionFee);
        setMonthlyFee(propObj.monthlyFee);
        // setEnrollments(propObj.enrollments);
    };


    return (
        <Container fluid className="dashBordDOM p-0 m-0">
            <Router>
                <Row>
                    <Col className="p-0 m-0">
                        <DashBoardNav/>
                    </Col>
                </Row>
                <Row className="dashDetailsRow bg-light p-0 m-0">
                    <Col  lg="2"  className= "sideMenu pl-0  ">
                        <SideMenuSD/>
                    </Col>
                    <Col className="bg-light pt-1 m-0">
                        {/*<Switch>*/}
                        {/*    <Route exact  path="/" component={MyClassDOM}> </Route>*/}
                        {/*    <Route exact  path="/exams" component={UpcomingExams}> </Route>*/}
                        {/*</Switch>*/}
                        <Switch>
                            {/*<Route exact path="/dashboard" component={MyClassDOM}/>*/}
                            <Route
                                exact path="/dashboard/student"
                                render={(props) => (
                                    <MyClassDOMSD />
                                )}
                            />
                            <Route
                                exact path="/dashboard/student/addclass"
                                render={(props) => (
                                    <AddClassDOMSD passClickedClass={findClickedClass} />
                                )}
                            />
                            <Route
                                exact path="/dashboard/student/addclass/viewclass"
                                render={(props) => (
                                    <ViewClassSD titleV={title}
                                               instituteV={institute}
                                               teacherIdV={teacherId}
                                               descriptionV={description}
                                               admissionFeeV={admissionFee}
                                               monthlyFeeV={monthlyFee}
                                               enrollmentsV={enrollments}
                                               getClassToEnroll={passClassToEnroll}/>
                                )}/>
                            <Route
                                exact path="/dashboard/student/addclass/enroll"
                                render={(props) => (
                                    <CardDetails classToEnroll={classToEnroll}/>
                                )}/>

                        </Switch>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Footer/>
                    </Col>
                </Row>
            </Router>
        </Container>

    );
}

export default SDashBoardDOM;