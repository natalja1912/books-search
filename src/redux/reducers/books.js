import * as ActionTypes from "../actionTypes";

const initialState = { isLoading: false, errMess: null, query: "", books: [] };

const Books = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.API_BOOKS_SUCCEDED:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        books: action.payload
      };

    case ActionTypes.API_BOOKS_REQUEST:
      return { ...state, isLoading: true, errMess: null, books: [] };

    case ActionTypes.API_BOOKS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};

export default Books;
