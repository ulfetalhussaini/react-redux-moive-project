import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { fetchPopularMovies } from '../redux/fetchReducer';
import MovieCard from './MovieCard';

function PopularMovies() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.popularMovies.popularMovies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [fetchPopularMovies]);

  return (
    <div>
      <Container>
        <h1 style={{ padding: '20px', textAlign: 'center' }}>Popular Movies</h1>
        <Row lg={4} md={2} sm={1}>
          {movies.map((movie) => (
            <Col>
              <MovieCard key={movie.id} movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default PopularMovies;
