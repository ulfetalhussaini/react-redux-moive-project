import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import fetchTrendingReducer from './fetchTrendingReducer';

export default combineReducers({
  popularMovies: fetchReducer,
  TrendingMovies: fetchTrendingReducer,
});
