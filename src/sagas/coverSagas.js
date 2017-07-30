import { COVER_FETCH, COVER_CREATE, COVER_ADD } from '../actions/coverActions';
import { call, put, takeEvery } from 'redux-saga/effects';
import storage from './RestFirebaseStorage';
import logger from '../Logger';

function* createCover(action) {
	if(action.payload.data && action.payload.id) {
		yield call(storage.post, `covers/${action.payload.id}`, action.payload.data);
	}
}

function* fetchCover(action) {
	if(action.payload) {
		try {
			logger.storage(`GET /covers/${action.payload}`);
			const url = yield call(storage.get, 'covers', action.payload);
			yield put({type: COVER_ADD, payload: {id: action.payload, cover: url}});
		} catch(err) {
			logger.error(err);
		}
	}
}

function* coverSagas() {
	yield takeEvery(COVER_CREATE, createCover);
	yield takeEvery(COVER_FETCH, fetchCover);
}

export default coverSagas;
