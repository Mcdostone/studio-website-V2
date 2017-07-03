import { all, fork } from 'redux-saga/effects';
import authSagas from './authSagas';
import mediaSagas from './mediaSagas';
import coverSagas from './coverSagas';
// import typesSagas from './typesSagas';
import fetchSaga from './fetchSaga';


 function* sagas() {
  yield all([
    authSagas,
		mediaSagas,
		// typesSagas,
		coverSagas,
		fetchSaga,
  ].map(fork))
}

export default sagas;
