import axios from 'axios';

export function fetchPopularMovies() {
  return (dispatch) => {
    dispatch({ type: 'FETCH_Popular_Movies_REQUEST' });
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=1b207b18fe60df3967b77f499347ddda'
      )
      .then((res) => {
        const popularMovies = res.data.results;
        dispatch({
          type: 'FETCH_Popular_Movies_SUCCESS',
          payload: popularMovies,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_Popular_Movies_FAILURE',
          payload: error.message,
        });
      });
  };
}

const initialState = {
  loading: false,
  popularMovies: [],
  error: '',
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_Popular_Movies_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_Popular_Movies_SUCCESS':
      return {
        ...state,
        loading: false,
        error: '',
        popularMovies: action.payload,
      };
    case 'FETCH_Popular_Movies_FAILURE':
      return {
        ...state,
        loading: false,
        popularMovies: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchReducer;
