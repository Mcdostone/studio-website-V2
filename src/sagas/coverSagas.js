import {
	COVER_FETCH,
	COVER_ADD,
	COVER_SET_CURRENT,
	COVER_RESET,
	COVER_NEW,
	COVER_CREATE } from '../actions/coverActions';
import { call, put, takeLatest, takeEvery, select } from 'redux-saga/effects';
import RestFirebaseStorage from './RestFirebaseStorage';
import logger from '../Logger'

const storage = new RestFirebaseStorage();


function* createCover(action) {
	//const url = yield call(storage.post, 'covers',action.payload.id);
}

function* getCover(action) {
	const state = yield select();
	const id = action.payload;
	if(state.covers[id] === undefined) {
		try {
				logger.react(`[FIREBASE-ST] GET OBJECT /covers/${id}`);

			const url = yield call(storage.get, 'covers', id.toLowerCase());
			yield put({type: COVER_ADD, payload: {page: id, url}});
			return url;
		} catch(err) {
			yield put({type: COVER_ADD, payload: {page: id, url: undefined}});
		}
	}
	return undefined;
}

function* setCover(action) {
	yield put({type: COVER_RESET});
	const state = yield select();
	const id = action.payload;
	if(state.covers[id] === undefined) {
		yield call(getCover, action);
	}
	yield put({type: COVER_NEW, payload: id});
}

function* coverSagas() {
	yield takeEvery(COVER_FETCH, getCover);
	yield takeEvery(COVER_CREATE, createCover);
	yield takeLatest(COVER_SET_CURRENT, setCover);
}

export default coverSagas;
