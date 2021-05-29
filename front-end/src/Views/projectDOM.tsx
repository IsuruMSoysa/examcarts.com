import React from 'react';
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Views/projectDOM.scss'
import LandingPage from "../Routes/Pages/Landing Page/landingPage";

const projectDOM: React.FC = () => {
    return (
        <Container fluid className="p-0">
           <LandingPage/>
        </Container>
    );
}

export default projectDOM;