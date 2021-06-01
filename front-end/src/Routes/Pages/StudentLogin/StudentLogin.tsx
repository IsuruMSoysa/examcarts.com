import React from 'react';
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginNavBar from "./Components/LoginNavBar";
import LoginSection from "./Components/loginSection";
import Footer from "../Landing Page/Components/Footer";


const StudentLogin: React.FC = () => {
    return (
        <Container fluid className="p-0">
            <LoginNavBar/>
            <LoginSection/>
            <Footer/>
        </Container>
    );
}

export default StudentLogin;