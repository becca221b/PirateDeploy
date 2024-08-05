import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css";
import { useNavigate} from "react-router-dom";
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogOut = () =>{
    localStorage.removeItem("token");
    navigate("/login");
  }
  
  return (
    <div>  
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to=""><strong>PiratesApp</strong></Navbar.Brand>
                <Nav className="ml-auto">
                  {
                    token ? 
                    <>
                      <Nav.Link as={Link} to="/pirates" className="login"><Button className="login">Pirates</Button></Nav.Link>
                      <Nav.Link onClick={handleLogOut}><Button className="btn btn-light action-button">Sing Out</Button></Nav.Link> 
                    </> :
                    <>
                       <Nav.Link as={Link} to="/login" className="login"><Button className="login">Login</Button></Nav.Link>
                       <Nav.Link as={Link} to= "/register"><Button className="btn btn-light action-button">Sing Up</Button></Nav.Link> 
                    </>

                  }
                    
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header
