/* eslint-disable react/prop-types */

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SendActorId } from '../redux/SingleActorReducer';

function ActorsCard({ actor }) {
  const dispatch = useDispatch();

  return (
    <Card style={{ width: '20%', color: 'black' }}>
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
          <Button
            variant="primary"
            onClick={() => dispatch(SendActorId(actor.id))}
          >
            More Info
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ActorsCard;
