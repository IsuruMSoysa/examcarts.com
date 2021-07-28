import React, {useEffect, useState} from 'react';
import { Button, Nav, Navbar} from "react-bootstrap";
import siteLogo from '../../../../assests/images/logoWhite.webp'
import "../../../../Views/projectDOM.scss"
import "../Styles/DashBord.scss"
import { Link, useHistory} from "react-router-dom";
import axios from "axios";


const DashBoardNavT: React.FC = () => {
  const history = useHistory();
  const [profileName,setProfileName] = useState<string>('');

  //navigate to login
  const logoutBtnClicked = () =>{
    history.push('/login');
    window.location.reload();
  }

  //get profile name
  useEffect(() => {
    getProfileName();
  }, []);

  const getProfileName = () => {
    axios.post("http://localhost:3001/getprofilename",{profileId:localStorage.getItem('passedTeacherID'),
      type:"teacher"})
      .then(resp => {
        setProfileName(resp.data.items);
        console.log(resp.data.items)
      })
      .catch(err =>{
        alert(err);
      })
  }

  return (
    <Navbar collapseOnSelect className="navLogin m-0 py-2 pl-4" expand="lg">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={siteLogo}
          width="210"
          height="auto"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navMenuItems ml-auto pr-4">
          <div className="profileName text-right py-2 pr-4">
            <h3>Hello {profileName} !</h3>
          </div>
          <Link to="/login" className="py-2">
            <Button className="logoutBtn px-4 mx-4" onClick={logoutBtnClicked} > Logout </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default DashBoardNavT;