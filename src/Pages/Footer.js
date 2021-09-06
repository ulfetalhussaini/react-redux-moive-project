import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div
      style={{
        //     padding: '50px',
        backgroundColor: '#f2f2f2',
        textAlign: 'center',
        color: 'black',
      }}
    >
      <NavLink to="/" exact style={{ textDecoration: 'none', padding: '5px' }}>
        Home
      </NavLink>
      <NavLink
        to="/actors"
        exact
        style={{ textDecoration: 'none', padding: '5px' }}
      >
        Actors
      </NavLink>
      <NavLink
        to="/movies"
        exact
        style={{ textDecoration: 'none', padding: '5px' }}
      >
        Movies
      </NavLink>
      <NavLink to="/about" style={{ textDecoration: 'none', padding: '5px' }}>
        About
      </NavLink>
      <h5 style={{ padding: '50px' }}>Ulfet & Lana</h5>
    </div>
  );
}
export default Footer;
