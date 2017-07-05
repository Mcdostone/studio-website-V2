import { call, takeEvery, put } from 'redux-saga/effects';
import {
	FETCH,
//	LIST,
	OBJECT,
} from '../actions/fetchActions';
import RestFirebaseDatabase from './RestFirebaseDatabase';
import logger from '../Logger'

const restFirebaseDatabase = new RestFirebaseDatabase();


export function* fetch(promise, action) {
	const {resource, param, dataType} = action.payload;
	logger.react(`GET ${dataType} /${resource}/${param} from firebase` );
	try {
		const response = yield call(promise, resource.toLowerCase(), param);
		const data = dataType === OBJECT ? [response.val()] : response.val();
		yield put({type: `${resource.toUpperCase()}_ADD`, payload: data});
	} catch(err) {
		console.log(err);
	}
}

function* fetchFromDatabase(action) {
	return yield call(fetch, restFirebaseDatabase.get, action);
}

function* fetchSaga() {
	yield takeEvery(FETCH, fetchFromDatabase);
}

export default fetchSaga;
