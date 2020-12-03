import { all } from 'redux-saga/effects';
import filesSaga from './notes/saga';

export default function* rootSaga(getState) {
    yield all([
      filesSaga(),
    ]);
  }