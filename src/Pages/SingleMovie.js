import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Badge } from 'react-bootstrap';

function SingleMovie() {
  const movie = useSelector((state) => state.singleMovie.singleMovie);

  return (
    <Container>
      <Row>
        <Col style={{ padding: '50px' }}>
          <h2>{movie.original_title}</h2>
          <p>{movie.overview}</p>
          <p>
            <b>Genre:</b>{' '}
            {movie.genres.map((genre) => (
              <span key={genre.id}>
                <Badge bg="warning" text="dark">
                  {genre.name}
                </Badge>{' '}
              </span>
            ))}
          </p>
          <p>
            <b>Released at:</b> {movie.release_date}
          </p>
          <p>
            <b>Rating:</b> {movie.vote_average}
          </p>
          <p>
            <b>Duration:</b> {movie.runtime} min
          </p>
          <p>
            <b>Language:</b>{' '}
            {movie.spoken_languages.map((language) => (
              <span key={language.english_name}>
                <Badge bg="warning" text="dark">
                  {language.english_name}
                </Badge>{' '}
              </span>
            ))}
          </p>
          <p>
            <b>Budget:</b> {movie.budget}
          </p>
          <p>
            <b>Revenue:</b> {movie.revenue}
          </p>
          <p>
            <b>Popularity:</b> {movie.popularity}
          </p>
          <p>
            <b>Vote Average:</b> {movie.vote_average}
          </p>
          <p>
            <b>Vote Count:</b> {movie.vote_count}
          </p>
          <p>
            <b>Production Company:</b>{' '}
            {movie.production_companies.map((company) => (
              <span key={company.id}>
                <Badge bg="warning" text="dark">
                  {company.name}
                </Badge>{' '}
              </span>
            ))}
          </p>
          <p>
            <b>Production Country:</b>{' '}
            {movie.production_countries.map((country) => (
              <span key={country.name}>
                <Badge bg="warning" text="dark">
                  {country.name}
                </Badge>{' '}
              </span>
            ))}
          </p>
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
