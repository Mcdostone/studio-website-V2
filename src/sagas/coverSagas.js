import { COVER_CREATE } from '../actions/coverActions';
import { call, takeEvery } from 'redux-saga/effects';
import storage from './RestFirebaseStorage';


function* createCover(action) {
	yield call(storage.post, `covers/${action.payload.id}`, action.payload.data);
}

/*function* getCover(action) {
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
}*/

function* coverSagas() {
	yield takeEvery(COVER_CREATE, createCover);
}

export default coverSagas;
