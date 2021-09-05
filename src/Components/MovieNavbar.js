import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function MovieNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/" exact>
          <Navbar.Brand href="#home">Movie Project</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" exact>
              <Nav.Link href="#home">Home</Nav.Link>
            </NavLink>
            <NavDropdown title="Genre" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/actors" exact>
              <Nav.Link href="#home">Actors</Nav.Link>
            </NavLink>
            <NavLink to="/about">
              <Nav.Link href="#home">About</Nav.Link>
            </NavLink>
            <Nav.Link href="#home">Bookmark</Nav.Link>
          </Nav>
          <Nav.Link href="#home">Sign in</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MovieNavbar;
