import authSagas from './auth';
import mediaListSagas from './mediaList';
import { all, fork } from 'redux-saga/effects';

 function* sagas() {
  yield all([
    authSagas,
    mediaListSagas,
  ].map(fork))
}

export default sagas;
