/* eslint-disable react/prop-types */

import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Movie({ movie }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{movie.original_title}</Card.Title>
        <Card.Text>{movie.release_date}</Card.Text>
        <Button variant="primary">Bookmark</Button>
      </Card.Body>
    </Card>
  );
}

export default Movie;
