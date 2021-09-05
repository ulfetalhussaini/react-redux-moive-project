import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div
      style={{
        padding: '50px',
        backgroundColor: 'lightGray',
      }}
    >
      <NavLink to="/" exact style={{ textDecoration: 'none', padding: '50px' }}>
        Home
      </NavLink>
      <NavLink
        to="/actors"
        exact
        style={{ textDecoration: 'none', padding: '50px' }}
      >
        Actors
      </NavLink>
      <NavLink
        to="/movies"
        exact
        style={{ textDecoration: 'none', padding: '50px' }}
      >
        Movies
      </NavLink>
      <NavLink to="/about" style={{ textDecoration: 'none', padding: '50px' }}>
        About
      </NavLink>
      <h4 style={{ padding: '50px' }}>Ulfet Alhussaini & Lana Kamal</h4>
    </div>
  );
}
export default Footer;
