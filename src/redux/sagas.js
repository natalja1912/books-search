import { put, takeLatest, all, call, delay, select } from "redux-saga/effects";
import * as ActionTypes from "./actionTypes";
import { addBooks, booksFailed, booksLoading } from "./actions";
import * as Api from "../utils/api";
import getQuery from "./selectors/getQuery";

function* watchInputChange() {
  yield takeLatest(ActionTypes.ADD_QUERY, fetchBooks);
}

function* fetchBooks() {
  const query = yield select(getQuery);
  yield delay(1000);
  yield put(booksLoading());
  try {
    let data = yield call(Api.getBooks, query.query);
    data = data.data.docs;
    if (data.length === 0){
      yield put(booksFailed('Ничего не найдено'));
    }
    else yield put(addBooks(data));
  } catch (error) {
    yield put(booksFailed(error.message));
  }
}

export default function* rootSaga() {
  yield all([watchInputChange()]);
}
