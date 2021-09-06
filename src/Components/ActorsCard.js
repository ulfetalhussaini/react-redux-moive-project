/* eslint-disable react/prop-types */

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ActorsCard({ actor }) {
  return (
    <Card style={{ width: '20%' }}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/original${actor.profile_path}`}
      />
      <Card.Body>
        <Card.Title>{actor.name}</Card.Title>
        <Card.Text>Gender: {actor.gender === 1 ? 'female' : 'male'}</Card.Text>
        <Card.Text>Popularity: {actor.popularity}</Card.Text>
        <Link
          to={`/actors/${actor.id}`}
          exact
          style={{ textDecoration: 'none' }}
        >
          <Button variant="primary">More Info</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ActorsCard;
