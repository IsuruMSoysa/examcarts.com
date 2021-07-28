import React, {useEffect} from 'react';
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../Landing Page/Components/NavbarComp'
import WelcomeSection from '../Landing Page/Components/WelcomeSection'
import AboutUs from '../Landing Page/Components/AboutUs'
import OurFeatures from "./Components/OurFeatures";
import Footer from "./Components/Footer";
import { Notification } from 'rsuite';

function LandingPage(){

  //welcome message
  useEffect(() => {
    welcome();
  }, []);

  const welcome = () => {
    Notification.success({
      title: 'Hello!',
      description: 'Warmly welcome to examcarts.com...',
      duration:2500
    });
  }

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

export default LandingPage;