import { all, fork } from 'redux-saga/effects';
import authSagas from './authSagas';
import mediaSagas from './mediaSagas';
import coverSagas from './coverSagas';
import fetchSaga from './fetchSaga';
import { crudSaga } from 'admin-on-rest'
import restClient from './restClient';


export default function* sagas() {
  yield all([
    authSagas,
		mediaSagas,
		coverSagas,
		fetchSaga,
		crudSaga(restClient),
  ].map(fork))
}
