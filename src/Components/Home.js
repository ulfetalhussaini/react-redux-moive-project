import React from 'react';
import MovieNavbar from './MovieNavbar';
import PopularMovies from './PopularMovies';
import TrendingMovies from './TrendingMovies';

function Home() {
  return (
    <div>
      <MovieNavbar />
      <PopularMovies />
      <TrendingMovies />
    </div>
  );
}

export default Home;
