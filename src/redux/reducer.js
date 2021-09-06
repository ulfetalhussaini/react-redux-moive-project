import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import fetchTrendingReducer from './fetchTrendingReducer';
import fetchGenresReducer from './fetchGenres';
import SingleMovieReducer from './SingleMovieReducer';
import BookmarkReducer from './BookmarkReducer';
import ActorsReducer from './ActorsReducer';

export default combineReducers({
  popularMovies: fetchReducer,
  TrendingMovies: fetchTrendingReducer,
  genres: fetchGenresReducer,
  singleMovie: SingleMovieReducer,
  bookmarkedMovies: BookmarkReducer,
  actors: ActorsReducer,
});
