import { all, fork } from 'redux-saga/effects';
import authSagas from './authSagas';
import mediaSagas from './mediaSagas';
import coverSagas from './coverSagas';
import fetchSaga from './fetchSaga';


export default function* sagas() {
  yield all([
    authSagas,
		mediaSagas,
		coverSagas,
		fetchSaga,
  ].map(fork))
}
