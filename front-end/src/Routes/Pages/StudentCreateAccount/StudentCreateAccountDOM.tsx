import React from 'react';
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../Landing Page/Components/Footer";
import CreateAccNav from "./CreateAccNav";
import StudentCreateForm from "./StudentCreateAccForm";


const StudentCreateAccountDOM: React.FC = () => {
  //main DOM for the account creation components
    return (
        <Container fluid className="p-0">
            <CreateAccNav/>
            <StudentCreateForm/>
            <Footer/>
        </Container>
    );
}

export default StudentCreateAccountDOM;