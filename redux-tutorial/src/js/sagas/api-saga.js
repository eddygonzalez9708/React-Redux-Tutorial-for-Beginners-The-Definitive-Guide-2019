import {
  takeEvery,
  call,
  put } from 'redux-saga/effects'
import {
  DATA_REQUESTED,
  DATA_LOADED,
  FAILED_DATA_LOADED } from '../constants/action-types';

export default function* watcherSaga() {
  yield takeEvery(DATA_REQUESTED, workerSaga)
}

function* workerSaga() {
  try {
    const payload = yield call(getData)
    yield put({ type: DATA_LOADED, payload })
  } catch (err) {
    yield put({ type: FAILED_DATA_LOADED, payload: err })
  }
}

function getData() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
}