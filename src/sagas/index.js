import authSagas from './auth';
import mediaSagas from './media';
import { all, fork } from 'redux-saga/effects';

 function* sagas() {
  yield all([
    authSagas,
		mediaSagas,
  ].map(fork))
}

export default sagas;
