/* eslint-disable react/prop-types */

import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Movie({ movie }) {
  return (
    <Card style={{ width: '20%' }}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      />
      <Card.Body>
        <Card.Title>{movie.original_title}</Card.Title>
        <Card.Text>Released at {movie.release_date}</Card.Text>
        <Button variant="primary">Bookmark</Button>
      </Card.Body>
    </Card>
  );
}

export default Movie;
