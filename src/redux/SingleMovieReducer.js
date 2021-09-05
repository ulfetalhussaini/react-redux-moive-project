import axios from 'axios';

export function fetchSingleMovie() {
  return (dispatch) => {
    dispatch({ type: 'FETCH_SINGLE_MOVIE_REQUEST' });
    axios
      .get(
        'https://api.themoviedb.org/3/movie/550?api_key=1b207b18fe60df3967b77f499347ddda'
      )
      .then((res) => {
        const SingleMovie = res.data;
        dispatch({
          type: 'FETCH_SINGLE_MOVIE_SUCCESS',
          payload: SingleMovie,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_SINGLE_MOVIE_FAILURE',
          payload: error.message,
        });
      });
  };
}

const initialState = {
  loading: false,
  singleMovie: [],
  error: '',
};

const SingleMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SINGLE_MOVIE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_SINGLE_MOVIE_SUCCESS':
      return {
        ...state,
        loading: false,
        error: '',
        singleMovie: action.payload,
      };
    case 'FETCH_SINGLE_MOVIE_FAILURE':
      return {
        ...state,
        loading: false,
        singleMovie: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default SingleMovieReducer;
