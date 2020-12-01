import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';
import service from '../../service/service';

function* writeStream ({ arg }) {
  try {
    const data = yield service.writeStream({ arg });
    console.log(data.status);
  } catch (err) {
      console.log(err)
  }
};

function* readStream () {
  try {
    const data = yield service.readStream();
    yield put({type: actions.FETCH_DATA_SUCCESS, data: data.data});
  } catch (err) {
      console.log(err)
  }
}

export default function* streamsSaga() {
  yield all([
    takeEvery(actions.WRITE_STREAM, writeStream),
    takeEvery(actions.READ_STREAM, readStream),
  ]);
}