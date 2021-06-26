import * as ActionTypes from "../../actionTypes";

const addQuery = (query) => ({
  type: ActionTypes.ADD_QUERY,
  payload: {
    query: query
  }
});

export default addQuery;
