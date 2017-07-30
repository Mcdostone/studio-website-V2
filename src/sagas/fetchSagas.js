import { all, call, takeEvery, put } from 'redux-saga/effects';
import database from './RestFirebaseDatabase';
import { FETCH_ALL, FETCH_ONE } from '../actions/fetchActions';
import logger from '../Logger';


function* fetchOne(action) {
	const { resource, id } = action.payload;
	logger.database(`GET /${resource}/${id}`);
	try {
		let response = yield call(database.get, resource.toLowerCase(), id);
		response = response.val();
		if(response)
			yield put({type: `${resource.toUpperCase()}_ADD`, payload: response});
		else
			logger.warn(`/${resource}/${id} doesn't exist in database`);
	} catch(err) {
		logger.error(err);
	}
}

export function* fetchAll(action) {
	const { resource } = action.payload;
	logger.database(`GET /${resource}`);
	try {
		let response = yield call(database.get, resource.toLowerCase(), undefined);
		response = response.val();

		if(response) {
			yield all(Object.keys(response).map(resourceId => {
				return put({type: `${resource.toUpperCase()}_ADD`, payload: response[resourceId]})
			}));
		}
		else {
			logger.warn(`/${resource} doesn't exist in database`);
		}
	} catch(err) {
		logger.error(err);
	}
}

export default function* fetchSagas() {
	yield takeEvery(FETCH_ALL, fetchAll);
	yield takeEvery(FETCH_ONE, fetchOne);
}
