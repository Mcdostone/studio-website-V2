import { all, fork } from 'redux-saga/effects';
import authSagas from './authSagas';
import mediaSagas from './mediaSagas';
import coverSagas from './coverSagas';
import eventsSagas from './eventsSagas';


 function* sagas() {
  yield all([
    authSagas,
		mediaSagas,
		eventsSagas,
		coverSagas,
  ].map(fork))
}

export default sagas;
