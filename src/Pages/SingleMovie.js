import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

function SingleMovie() {
  const movie = useSelector((state) => state.singleMovie.singleMovie);

  return (
    <Container>
      <Row>
        <Col style={{ padding: '50px' }}>
          <h2>{movie.original_title}</h2>
          <p>{movie.overview}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>Budget: {movie.budget}</p>
        </Col>
        <Col>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.original_title}
            style={{ width: '70%' }}
          />
        </Col>
      </Row>
    </Container>
  );
}
export default SingleMovie;
