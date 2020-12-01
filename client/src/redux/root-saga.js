import { all } from 'redux-saga/effects';
import streamsSaga from './streams/saga';

export default function* rootSaga(getState) {
    yield all([
      streamsSaga(),
    ]);
  }