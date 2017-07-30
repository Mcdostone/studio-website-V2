import { all, fork } from 'redux-saga/effects';
import authSagas from './authSagas';
import mediaSagas from './mediaSagas';
import coverSagas from './coverSagas';
import fetchSagas from './fetchSagas';
import crudSagas from './crudSagas';
import uploadSagas from './uploadSagas';
import albumSagas from './albumSagas';


export default function* sagas() {
  yield all([
    authSagas,
		crudSagas,
		coverSagas,
		fetchSagas,
		/*mediaSagas,
		uploadSagas,*/
		albumSagas
  ].map(fork))
}
