import axios from 'axios';

export function fetchActors() {
  return (dispatch) => {
    dispatch({ type: 'FETCH_Actors_REQUEST' });
    axios
      .get(
        'https://api.themoviedb.org/3/person/popular?api_key=1b207b18fe60df3967b77f499347ddda&language=en-US&page=1'
      )
      .then((res) => {
        const Actors = res.data.results;
        dispatch({
          type: 'FETCH_Actors_SUCCESS',
          payload: Actors,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_Actors_FAILURE',
          payload: error.message,
        });
      });
  };
}

const initialState = {
  loading: false,
  actors: [],
  error: '',
};

const ActorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_Actors_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_Actors_SUCCESS':
      return {
        ...state,
        loading: false,
        error: '',
        actors: action.payload,
      };
    case 'FETCH_Actors_FAILURE':
      return {
        ...state,
        loading: false,
        actors: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ActorsReducer;
