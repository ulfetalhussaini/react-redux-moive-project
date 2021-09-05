export function Bookmark(movie) {
  return (dispatch) => {
    dispatch({ type: 'Bookmark_Add', payload: movie });
  };
}

const initialState = {
  bookmark: [],
};

const BookmarkReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Bookmark_Add':
      return {
        bookmark: [...state.bookmark, action.payload],
      };
    default:
      return state;
  }
};

export default BookmarkReducer;
