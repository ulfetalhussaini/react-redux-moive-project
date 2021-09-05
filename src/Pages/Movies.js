import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { fetchPopularMovies } from '../redux/fetchReducer';
import MovieCard from '../Components/MovieCard';

function Movies() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.popularMovies.popularMovies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [fetchPopularMovies]);

  return (
    <div>
      <Container>
        <Row>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Movies;
