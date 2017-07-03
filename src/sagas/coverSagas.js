import { COVER_FETCH, COVER_ADD, COVER_SET_CURRENT } from '../actions/coverActions';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import RestFirebaseStorage from './RestFirebaseStorage';

const storage = new RestFirebaseStorage();

function* getCover(action) {
	const state = yield select();
	const id = action.payload.id;
	if(id && state.covers[id] === undefined) {
		try {
			const url = yield call(storage.get, 'covers', action.payload.id.toLowerCase());
			yield put({type: COVER_ADD, payload: {page: action.payload.id, url}});
			if(action.payload.erase === true)
				yield put({type: COVER_SET_CURRENT, payload: action.payload.id});
		} catch(err) {
			yield put({type: COVER_ADD, payload: {page: action.payload.id, url: undefined}});
		}

	}
}

function* coverSagas() {
	yield takeLatest(COVER_FETCH, getCover);
}

export default coverSagas;
