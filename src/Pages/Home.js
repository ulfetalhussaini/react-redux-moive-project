import React from 'react';
import PopularMovies from '../Components/PopularMovies';
import TrendingMovies from '../Components/TrendingMovies';

function Home() {
  return (
    <div>
      <PopularMovies />
      <TrendingMovies />
    </div>
  );
}

export default Home;
