import React from 'react';
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginNavBar from "./Components/LoginNavBar";
import Footer from "../Landing Page/Components/Footer";
import ResetPassword from "./Components/ResetPassword";


const ResetPasswordDOM: React.FC = () => {
    return (
        <Container fluid className="p-0">
            <LoginNavBar/>
            <ResetPassword/>
            <Footer/>
        </Container>
    );
}

export default ResetPasswordDOM;