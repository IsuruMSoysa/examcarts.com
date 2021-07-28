import React from 'react';
import {BrowserRouter as Router, Switch, Route, RouteComponentProps} from "react-router-dom";
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Views/projectDOM.scss'
import LandingPage from "../Routes/Pages/Landing Page/landingPage";
import StudentLogin from "../Routes/Pages/StudentLogin/StudentLogin";
import ResetPasswordDOM from "../Routes/Pages/StudentLogin/ResetPasswordDOM";
import StudentCreateAccountDOM from "../Routes/Pages/StudentCreateAccount/StudentCreateAccountDOM";
import DashBoardDOM from "../Routes/Pages/Dashboard UI/Components/DashBoardDOM";
import SDashBoardDOM from "../Routes/Pages/Dashboard UI/StudentDashBoard/SDashBoardDOM";
import IDashboardDOM from "../Routes/Pages/Dashboard UI/InstructorDashboard/IDashboardDOM";

const projectDOM: React.FC = () => {
    return (
        <Container fluid className="p-0">
            <Router>
                <Switch>
                    <Route path="/login" component={StudentLogin}/>
                    <Route path="/createAcc" component={StudentCreateAccountDOM}/>
                    <Route path="/forgotPassword" component={ResetPasswordDOM}/>
                    <Route exact path="/dashboard" component={DashBoardDOM}/>
                    <Route exact path="/dashboard/student" component={SDashBoardDOM}/>
                    <Route exact path="/dashboard/instructor" component={IDashboardDOM}/>
                    <Route exact path="/" component={LandingPage}/>
                </Switch>
            </Router>
        </Container>
    );
}

export default projectDOM;