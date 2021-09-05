import axios from 'axios';

export function fetchTrendingMovies() {
  return (dispatch) => {
    dispatch({ type: 'FETCH_Trending_Movies_REQUEST' });
    axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=1b207b18fe60df3967b77f499347ddda'
      )
      .then((res) => {
        const TrendingMovies = res.data.results;
        dispatch({
          type: 'FETCH_Trending_Movies_SUCCESS',
          payload: TrendingMovies,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_Trending_Movies_FAILURE',
          payload: error.message,
        });
      });
  };
}

const initialState = {
  loading: false,
  TrendingMovies: [],
  error: '',
};

const fetchTrendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_Trending_Movies_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_Trending_Movies_SUCCESS':
      return {
        ...state,
        loading: false,
        error: '',
        TrendingMovies: action.payload,
      };
    case 'FETCH_Trending_Movies_FAILURE':
      return {
        ...state,
        loading: false,
        TrendingMovies: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchTrendingReducer;
