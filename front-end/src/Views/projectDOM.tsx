import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Views/projectDOM.scss'
import LandingPage from "../Routes/Pages/Landing Page/landingPage";
import StudentLogin from "../Routes/Pages/StudentLogin/StudentLogin";
import ResetPasswordDOM from "../Routes/Pages/StudentLogin/ResetPasswordDOM";
import StudentCreateAccountDOM from "../Routes/Pages/StudentCreateAccount/StudentCreateAccountDOM";
import DashBoardDOM from "../Routes/Pages/Dashboard UI/Components/DashBoardDOM";

const projectDOM: React.FC = () => {
    return (
        <Container fluid className="p-0">
            <Router>
                <Switch>
                    <Route path="/login" exact component={StudentLogin}/>
                    <Route path="/createAcc" component={StudentCreateAccountDOM}/>
                    <Route path="/forgotPassword" component={ResetPasswordDOM}/>
                    <Route path="/dashboard" component={DashBoardDOM}/>
                    <Route path="/" component={LandingPage}/>
                </Switch>
            </Router>
        </Container>
    );
}

export default projectDOM;