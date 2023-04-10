import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" >
      <Container>
        <Navbar.Brand className='navBrand' href="/">Game Night</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='navLink' href="/">Home</Nav.Link>
            <Nav.Link className='navLink' href="/add">Players</Nav.Link>
            <Nav.Link className='navLink' href="/tools">Tools</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar