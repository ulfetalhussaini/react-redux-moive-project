import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { fetchPopularMovies } from '../redux/fetchReducer';
import MovieCard from './MovieCard';

function PopularMovies() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.popularMovies.popularMovies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [fetchPopularMovies]);

  const { t } = useTranslation();

  return (
    <div>
      <Container>
        <h1 style={{ padding: '20px', textAlign: 'center' }}>
          {t('Popular_Movies')}
        </h1>
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
