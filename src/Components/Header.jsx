import React from 'react'
import Nav from 'react-bootstrap/Nav';
import  Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import  Avatar  from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
     <Navbar expand="lg" className="">
          <Container className="d-flex justify-content-between" style={{ border: "1px solid black", background: "#557A46" }}>
            <div style={{ margin: 3 }}>
           <Link to="/">  <Avatar alt="dev.jpeg" src="dev.jpeg" /></Link> 
            </div>
            <div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link className="navlist" href="/">Home</Nav.Link>
                  <Nav.Link className="navlist" href="/About">About</Nav.Link>
                  <Nav.Link className="navlist" href="/Project">Project</Nav.Link>
                  <Nav.Link className="navlist" href="/Contact">Contact</Nav.Link>
                  <Nav.Link className="navlist" href="/Resume">Resume</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
    
    
    </>
  )
}

export default Header
