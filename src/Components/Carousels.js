import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel, Container } from 'react-bootstrap';
import { fetchTrendingMovies } from '../redux/fetchTrendingReducer';

export default function Carousels() {
  const dispatch = useDispatch();
  const trending = useSelector((state) => state.TrendingMovies.TrendingMovies);

  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, [fetchTrendingMovies]);

  return (
    <Container style={{ width: '75%' }}>
      <Carousel>
        {trending.map((movie) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.original_title}
            />
            <Carousel.Caption>
              <h3>{movie.original_title}</h3>
              <p>Released at {movie.release_date}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
