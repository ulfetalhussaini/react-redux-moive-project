/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchGenres } from '../redux/fetchGenres';
import { fetchSingleMovie } from '../redux/SingleMovieReducer';
import { Bookmark } from '../redux/BookmarkReducer';

function MovieCard({ movie }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [fetchGenres]);

  const genres = useSelector((state) => state.genres.genres);

  return (
    <Card style={{ width: '20%' }}>
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      />
      <Card.Body>
        <Card.Title>{movie.original_title}</Card.Title>
        <Card.Text>Released at {movie.release_date}</Card.Text>
        <Card.Text>Rating: {movie.vote_average}</Card.Text>
        <Card.Text>
          {movie.genre_ids.map((id) =>
            genres
              .filter((genre) => genre.id === id)
              .map((genre) => (
                <span key={genre.id}>
                  <Badge bg="warning" text="dark">
                    {genre.name}
                  </Badge>{' '}
                </span>
              ))
          )}
        </Card.Text>
        <Link
          to={`/movies/${movie.id}`}
          exact
          style={{ textDecoration: 'none' }}
        >
          <Button
            variant="primary"
            onClick={() => dispatch(fetchSingleMovie(movie.id))}
          >
            More Info
          </Button>
        </Link>{' '}
        <Button variant="primary" onClick={() => dispatch(Bookmark(movie))}>
          Bookmark
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
