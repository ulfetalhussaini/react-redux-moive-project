import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { fetchTrendingMovies } from '../redux/fetchTrendingReducer';
import MovieCard from './MovieCard';

function Movies() {
  const dispatch = useDispatch();
  const trending = useSelector((state) => state.TrendingMovies.TrendingMovies);

  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, [fetchTrendingMovies]);

  return (
    <div>
      <Container>
        <h1 style={{ padding: '20px', textAlign: 'center' }}>Trening Movies</h1>
        <Row>
          {trending.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Movies;
