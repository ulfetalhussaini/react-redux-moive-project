import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import MovieCard from '../Components/MovieCard';

function Bookmark() {
  const bookmarkedMovies = useSelector(
    (state) => state.bookmarkedMovies.bookmark
  );

  return (
    <Container>
      <h1 style={{ padding: '20px', textAlign: 'center' }}>
        Bookmarked Movies
      </h1>
      <Row>
        {bookmarkedMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Row>
    </Container>
  );
}
export default Bookmark;
