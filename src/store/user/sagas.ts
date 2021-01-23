import { takeEvery, all } from 'redux-saga/effects';
import { USER_GET } from './types';

function* userGet() {}

export default function* userSaga() {
  yield all([takeEvery(USER_GET, userGet)]);
}
