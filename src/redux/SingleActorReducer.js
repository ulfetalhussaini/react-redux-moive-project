export function SendActorId(actorId) {
  return (dispatch) => {
    dispatch({ type: 'Add_Actor_Id', payload: actorId });
  };
}

const initialState = {
  actorId: '',
};

const SingleActorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add_Actor_Id':
      return {
        actorId: action.payload,
      };
    default:
      return state;
  }
};

export default SingleActorReducer;
