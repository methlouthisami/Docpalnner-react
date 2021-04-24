import React from 'react'
import './navbar.css';
import {Navbar, Nav} from 'react-bootstrap';



function NavigationBar(){
  return(
    <div>
  {/* <Navbar variant="light"className="navbar">
    <Navbar.Brand href="#home"><img class="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"/></Navbar.Brand>
    <Nav className="ml-auto left-Nav">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar> */}

  <Navbar  expand="lg" className="navbar">
  <Navbar.Brand href="#home"><img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"class="logo-docplanner"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto left-Nav">
      <Nav.Link href="#home"className="nav-link">About us</Nav.Link>
      <Nav.Link href="#link"className="nav-link">Career</Nav.Link>
      <Nav.Link href="#link"className="nav-link">Departements</Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>


    </div>
   )

 }

export default NavigationBar