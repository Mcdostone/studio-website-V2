import { all, fork } from 'redux-saga/effects';
import authSagas from './authSagas';
import mediaSagas from './mediaSagas';
import coverSagas from './coverSagas';
import fetchSagas from './fetchSagas';
import crudSagas from './crudSagas';
import userSagas from './userSagas';
import reportSagas from './reportSagas';
import uploadSagas from './uploadSagas';
import albumSagas from './albumSagas';


export default function* sagas() {
  yield all([
    authSagas,
		crudSagas,
		fetchSagas,
		coverSagas,
		userSagas,
		albumSagas,
		uploadSagas,
		mediaSagas,
		reportSagas,
  ].map(fork))
}
