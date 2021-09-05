import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import fetchTrendingReducer from './fetchTrendingReducer';
import fetchGenresReducer from './fetchGenres';

export default combineReducers({
  popularMovies: fetchReducer,
  TrendingMovies: fetchTrendingReducer,
  genres: fetchGenresReducer,
});
