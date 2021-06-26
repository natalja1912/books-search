import * as ActionTypes from "../actionTypes";

const initialState = { isLoading: false, errMess: null, query: "", books: [] };

const Queries = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_QUERY:
      return {
        ...state,
        query: action.payload
      };

    default:
      return state;
  }
};

export default Queries;
