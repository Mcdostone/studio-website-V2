import { call, takeEvery } from 'redux-saga/effects';
import { USERS_UPDATE } from '../actions/userActions';
import database from './RestFirebaseDatabase';

const resource = 'users';

function* create(promise, action) {
	if(action.payload)
		yield call(promise, resource.toLowerCase(), action.payload);
}

function* albumSagas() {
	yield takeEvery(USERS_UPDATE, create, database.put);
}

export default albumSagas;
