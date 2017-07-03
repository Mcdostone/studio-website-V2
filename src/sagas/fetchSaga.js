import { call, takeEvery, put } from 'redux-saga/effects';
import { FETCH } from '../actions/fetchActions';
import RestFirebaseDatabase from './RestFirebaseDatabase';


const restFirebaseDatabase = new RestFirebaseDatabase();

function* fetchData(action) {
	const response = yield call(restFirebaseDatabase.get, action.payload.resource.toLowerCase(), action.payload.param);
	yield put({type: `${action.payload.resource.toUpperCase()}_ADD`, payload: response.val()});
}

function* fetchSaga() {
	yield takeEvery(FETCH, fetchData);
}

export default fetchSaga;
