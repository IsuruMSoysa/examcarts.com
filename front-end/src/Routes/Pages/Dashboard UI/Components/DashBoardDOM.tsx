import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Fragment, useState} from 'react';
import {Col, Container, Nav, Row} from "react-bootstrap";
import DashBoardNav from "./DashBoardNav";
import SideMenu from "./SideMenu";
import Footer from "../../Landing Page/Components/Footer";
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import MyClassDOM from "./MyClassDOM";
import UpcomingExams from "./UpcomingExams";
import CreateClass from "./CreateClass";
import ViewClass from "../Components/ViewClass"
import  {IClassObj} from  "../../../../Types/teacherTypes";


const DashBoardDOM: React.FC = () => {
    const [title,setTitle] = useState('');
    const [institute,setInstitute] = useState('');
    const [teacherId,setTeacherId] = useState('');
    const [description,setDescription] = useState('');
    const [admissionFee,setAdmissionFee] = useState('');
    const [monthlyFee,setMonthlyFee] = useState('');
    const [_id,set_id] = useState('');
    const [enrollments,setEnrollments] = useState(0);

    const assignClassProps = (propObj:IClassObj) => {
        setTitle(propObj.className);
        setInstitute(propObj.educationInstitute);
        setTeacherId(propObj.teacherId);
        setDescription(propObj.description);
        setAdmissionFee(propObj.admissionFee);
        setMonthlyFee(propObj.monthlyFee);
        set_id(propObj._id);
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
                        <SideMenu/>
                    </Col>
                    <Col className="bg-light pt-1 m-0">
                            {/*<Switch>*/}
                            {/*    <Route exact  path="/" component={MyClassDOM}> </Route>*/}
                            {/*    <Route exact  path="/exams" component={UpcomingExams}> </Route>*/}
                            {/*</Switch>*/}
                            <Switch>
                                {/*<Route exact path="/dashboard" component={MyClassDOM}/>*/}
                                <Route
                                   exact path="/dashboard"
                                    render={(props) => (
                                         <MyClassDOM sendClickItems={assignClassProps} />
                                    )}
                                />
                                <Route exact path="/dashboard/createClass" component={CreateClass}/>
                                <Route
                                   exact path="/dashboard/viewClass"
                                    render={(props) => (
                                         <ViewClass titleV={title}
                                        instituteV={institute}
                                        teacherIdV={teacherId}
                                        descriptionV={description}
                                        admissionFeeV={admissionFee}
                                        monthlyFeeV={monthlyFee}
                                        enrollmentsV={enrollments}
                                         _idV={_id}/>
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

export default DashBoardDOM;