import React from 'react';
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../Landing Page/Components/NavbarComp'
import WelcomeSection from '../Landing Page/Components/WelcomeSection'
import AboutUs from '../Landing Page/Components/AboutUs'
import OurFeatures from "./Components/OurFeatures";
import Footer from "./Components/Footer";

const landingPage: React.FC = () => {
    return (
        <Container fluid className="p-0">
            <NavbarComp/>
            <WelcomeSection/>
            <AboutUs/>
            <OurFeatures/>
            <Footer/>
        </Container>
    );
}

export default landingPage;