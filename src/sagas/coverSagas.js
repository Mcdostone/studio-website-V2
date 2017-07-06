import { COVER_FETCH, COVER_ADD, COVER_SET_CURRENT, COVER_NEW } from '../actions/coverActions';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import RestFirebaseStorage from './RestFirebaseStorage';
import logger from '../Logger'

const storage = new RestFirebaseStorage();

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
	const state = yield select();
	const id = action.payload;
	if(state.covers[id] === undefined) {
		yield call(getCover, action);
	}
	yield put({type: COVER_NEW, payload: id});
}

function* coverSagas() {
	yield takeLatest(COVER_FETCH, getCover);
	yield takeLatest(COVER_SET_CURRENT, setCover);
}

export default coverSagas;
