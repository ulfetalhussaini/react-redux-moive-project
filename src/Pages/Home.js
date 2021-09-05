import React from 'react';
import PopularMovies from '../Components/PopularMovies';
import TrendingMovies from '../Components/TrendingMovies';
import Carousels from '../Components/Carousels';

function Home() {
  return (
    <div>
      <Carousels />
      <PopularMovies />
      <TrendingMovies />
    </div>
  );
}

export default Home;
