import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPopularMovies } from '../redux/fetchReducer';
import Movie from './Movie';

function Movies() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.popularMovies.popularMovies);

  dispatch(fetchPopularMovies());

  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;
