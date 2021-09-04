import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { fetchPopularMovies } from '../redux/fetchReducer';
import Movie from './Movie';

function Movies() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.popularMovies.popularMovies);

  dispatch(fetchPopularMovies());

  return (
    <div>
      <Container>
        <h1 style={{ padding: '20px', textAlign: 'center' }}>Popular Movies</h1>
        <Row>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Movies;
