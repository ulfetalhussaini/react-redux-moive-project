import axios from 'axios';

const fetchPupularMoviesRequest = 'FETCH_Popular_Movies_REQUEST';
const fetchPopularMoviesSuccess = 'FETCH_Popular_Movies_SUCCESS';
const fetchPopularMoviesFailure = 'FETCH_Popular_Movies_FAILURE';

export function fetchPopularMovies() {
  return (dispatch) => {
    dispatch({ type: fetchPupularMoviesRequest });
    axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=1b207b18fe60df3967b77f499347ddda'
      )
      .then((res) => {
        const popularMovies = res.data.results;
        dispatch({ type: fetchPopularMoviesSuccess, payload: popularMovies });
      })
      .catch((error) => {
        dispatch({ type: fetchPopularMoviesFailure, payload: error.message });
      });
  };
}

const initialState = {
  loading: false,
  popularMovies: [],
  error: '',
};

const popularMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchPupularMoviesRequest:
      return {
        ...state,
        loading: true,
      };
    case fetchPopularMoviesSuccess:
      return {
        ...state,
        loading: false,
        error: '',
        popularMovies: action.payload,
      };
    case fetchPopularMoviesFailure:
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

export default popularMoviesReducer;
