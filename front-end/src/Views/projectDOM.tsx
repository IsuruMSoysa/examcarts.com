import React from 'react';
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../Routes/Pages/Landing Page/Components/NavbarComp'


const projectDOM: React.FC = () => {
    return (
        <Container fluid className="p-0">
           <NavbarComp/>
        </Container>
    );
}

export default projectDOM;