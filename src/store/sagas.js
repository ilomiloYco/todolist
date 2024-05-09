// import takeEvery from "redux-saga";
import { call, fork, put, takeEvery } from "redux-saga/effects";

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function* deleteAsync(action) {
  const { index } = action;
  yield call(delay, 2000);
  yield put({ type: "DELETE_TODOITEM", index });
}
export function* addAsync() {
  yield call(delay, 1000);
  yield put({ type: "ADD_TODOITEM" });
}

export default function* rootSaga() {
  console.log("hello");
  yield takeEvery("DELETE_ASYNC", deleteAsync);
  yield takeEvery("ADD_ASYNC", addAsync);
}
