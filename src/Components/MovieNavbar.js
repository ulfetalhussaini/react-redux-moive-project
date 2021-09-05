import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGenres } from '../redux/fetchGenres';

function MovieNavbar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [fetchGenres]);

  const genres = useSelector((state) => state.genres.genres);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/" exact style={{ textDecoration: 'none' }}>
          <Navbar.Brand href="/">Movie Project</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" exact style={{ textDecoration: 'none' }}>
              <Nav.Link href="/">Home</Nav.Link>
            </NavLink>
            <NavLink to="/movies" exact style={{ textDecoration: 'none' }}>
              <Nav.Link href="/actors">Movies</Nav.Link>
            </NavLink>
            <NavDropdown title="Genre" id="basic-nav-dropdown">
              {genres.map((genre) => (
                <NavDropdown.Item key={genre.id} href="#action/3.1">
                  {genre.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavLink to="/actors" exact style={{ textDecoration: 'none' }}>
              <Nav.Link href="/actors">Actors</Nav.Link>
            </NavLink>
            <NavLink to="/about" style={{ textDecoration: 'none' }}>
              <Nav.Link href="/about">About</Nav.Link>
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
