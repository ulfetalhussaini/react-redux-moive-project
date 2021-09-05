import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import fetchTrendingReducer from './fetchTrendingReducer';
import fetchGenresReducer from './fetchGenres';
import SingleMovieReducer from './SingleMovieReducer';
import BookmarkReducer from './BookmarkReducer';

export default combineReducers({
  popularMovies: fetchReducer,
  TrendingMovies: fetchTrendingReducer,
  genres: fetchGenresReducer,
  singleMovie: SingleMovieReducer,
  bookmarkedMovies: BookmarkReducer,
});
