import axios from 'axios';

export function fetchGenres() {
  return (dispatch) => {
    dispatch({ type: 'FETCH_Genres_REQUEST' });
    axios
      .get(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=1b207b18fe60df3967b77f499347ddda&language=en-US'
      )
      .then((res) => {
        const Genres = res.data.genres;
        dispatch({
          type: 'FETCH_Genres_SUCCESS',
          payload: Genres,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_Genres_FAILURE',
          payload: error.message,
        });
      });
  };
}

const initialState = {
  loading: false,
  genres: [],
  error: '',
};

const fetchGenresReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_Genres_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_Genres_SUCCESS':
      return {
        ...state,
        loading: false,
        error: '',
        genres: action.payload,
      };
    case 'FETCH_Genres_FAILURE':
      return {
        ...state,
        loading: false,
        genres: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchGenresReducer;
