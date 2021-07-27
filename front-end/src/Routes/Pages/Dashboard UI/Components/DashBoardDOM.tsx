import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SideMenu from "./SideMenu";
import Footer from "../../Landing Page/Components/Footer";
import {Route, BrowserRouter as Router, Switch, RouteComponentProps} from "react-router-dom";
import MyClassDOM from "./MyClassDOM";
import CreateClass from "./CreateClass";
import ViewClass from "../Components/ViewClass"
import  {IClassObj} from  "../../../../Types/teacherTypes";
import EnrollmentRequest from "./EnrollmentsRequest";
import ViewRequest from "./ViewRequest";
import DashBoardNavT from "./DashBoardNavT";
import CreatePaper from "./CreatePaper";
import CreatePaperForm from "./CreatePaperForm";
import AddMarkingScheme from "./AddMarkingScheme";
import ScheduleExam from "./ScheduleExam";
import AddInstructors from "./AddInstructors";
import MyInstructors from "./MyInstructors";
import UpcomingExams from "./UpcomingExams";
import ExamResultsList from "./ExamResultsList";
import ViewResults from "./ViewResults";
import AnalysisTeacher from "./AnalysisTeacher";


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
                        <DashBoardNavT/>
                    </Col>
                </Row>
                <Row className="dashDetailsRow bg-light p-0 m-0">
                    <Col  lg="2"  className= "sideMenu pl-0  ">
                        <SideMenu/>
                    </Col>
                    <Col className="bg-light pt-1 m-0">
                            <Switch>
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
                                <Route
                                    exact path="/enrollmentRequests"
                                    render={(props: RouteComponentProps<{}>) => (
                                        <EnrollmentRequest{...props}/>
                                    )}/>
                                <Route
                                    exact path="/dashboard/viewRequest/:id"
                                    render={(props: RouteComponentProps<{}>) => (
                                        <ViewRequest{...props}/>
                                    )}/>
                                <Route
                                  exact path="/dashboard/mypapers"
                                  render={(props: RouteComponentProps<{}>) => (
                                    <CreatePaper{...props}/>
                                  )}/>
                                <Route
                                   path="/dashboard/createpaperform"
                                  render={(props: RouteComponentProps<{}>) => (
                                    <CreatePaperForm{...props}/>
                                  )}/>
                                <Route
                                   path="/dashboard/markingscheme/:id"
                                  render={(props: RouteComponentProps<{}>) => (
                                    <AddMarkingScheme{...props}/>
                                  )}/>
                                <Route
                                   path="/dashboard/examschedule"
                                  render={(props: RouteComponentProps<{}>) => (
                                    <ScheduleExam{...props}/>
                                  )}/>
                                <Route
                                   path="/dashboard/getinstructors"
                                  render={(props: RouteComponentProps<{}>) => (
                                    <AddInstructors{...props}/>
                                  )}/>
                                <Route
                                   path="/dashboard/myinstructors/:id"
                                  render={(props: RouteComponentProps<{}>) => (
                                    <MyInstructors{...props}/>
                                  )}/>
                                <Route
                                  exact path="/dashboard/myinstructors"
                                  render={(props: RouteComponentProps<{}>) => (
                                    <MyInstructors{...props}/>
                                  )}/>
                                <Route
                                  exact path="/dashboard/upcomingexams"
                                  render={(props: RouteComponentProps<{}>) => (
                                    <UpcomingExams{...props}/>
                                  )}/>
                                <Route
                                 exact path="/dashboard/resultsexamlist"
                                  render={(props: RouteComponentProps<{}>) => (
                                    <ExamResultsList{...props}/>
                                  )}/>
                                <Route
                                 exact path="/dashboard/instructor/answersheetlistteacher/:id"
                                  render={(props: RouteComponentProps<{}>) => (
                                    <ViewResults{...props}/>
                                  )}/>
                              <Route
                                 exact path="/dashboard/analyzeteacher"
                                  render={(props: RouteComponentProps<{}>) => (
                                    <AnalysisTeacher{...props}/>
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