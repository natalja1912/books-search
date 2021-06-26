import * as ActionTypes from "../../actionTypes";

const booksFailed = (errmess) => ({
  type: ActionTypes.API_BOOKS_FAILED,
  payload: errmess
});

export default booksFailed;
