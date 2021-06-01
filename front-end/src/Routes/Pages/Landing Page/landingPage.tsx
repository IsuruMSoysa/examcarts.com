import React from 'react';
import {Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from '../Landing Page/Components/NavbarComp'
import WelcomeSection from '../Landing Page/Components/WelcomeSection'
import AboutUs from '../Landing Page/Components/AboutUs'
import OurFeatures from "./Components/OurFeatures";
import Footer from "./Components/Footer";
import {Route,BrowserRouter as Router, Switch} from "react-router-dom";

const landingPage: React.FC = () => {
    return (
        <Container fluid className="p-0">
            {/*<Router>*/}
            <NavbarComp/>
            <WelcomeSection/>
            <AboutUs/>
            <OurFeatures/>
            <Footer/>
            {/*    <Switch>*/}
                    {/*<Route path="/" exact component={WelcomeSection} />*/}
                    {/*<Route path="/aboutUs"  component={AboutUs} />*/}
                    {/*<Route path="/features"  component={OurFeatures} />*/}
                    {/*<Route path="/contactUs"  component={Footer} />*/}
                    {/*<Route path="/Login"  component={StudentLogin} />*/}
                {/*</Switch>*/}
            {/*</Router>*/}

        </Container>
    );
}

export default landingPage;