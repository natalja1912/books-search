import * as ActionTypes from "../../actionTypes";

const addBooks = (books) => ({
  type: ActionTypes.API_BOOKS_SUCCEDED,
  payload: books
});

export default addBooks;
