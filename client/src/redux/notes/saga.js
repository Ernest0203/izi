import { all, takeEvery, put } from 'redux-saga/effects';
import actions from './actions';
import service from '../../service/service';

function* getNotes () {
  try {
    const response = yield service.getNotes();
    yield put({type: actions.FETCH_DATA_SUCCESS, data: response.data});
  } catch (error) {
    console.log(error);
  }
};

function* createNote (args) {
  try {
    const response = yield service.createNote(args.data);
    yield put({type: actions.CREATE_ITEM_SUCCESS, data: response.data});
  } catch (error) {
    console.log(error);
  }
}

function* removeNote (args) {
  try {
    const response = yield service.removeNote(args.data);
    yield put({type: actions.REMOVE_ITEM_SUCCESS, data: args.data});
  } catch (error) {
    console.log(error);
  }
}

export default function* filesSaga() {
  yield all([
    takeEvery(actions.FETCH_DATA, getNotes),
    takeEvery(actions.CREATE_ITEM, createNote),
    takeEvery(actions.REMOVE_ITEM, removeNote),
  ]);
}