import { call, put, takeEvery } from 'redux-saga/effects';
import { COVERS_FETCH, COVERS_CREATE, addCover, COVERS_DELETE } from '../actions/coverActions';
import { notify } from '../actions/notificationActions';
import storage from './RestFirebaseStorage';
import logger from '../Logger';

function* createCover(action) {
	if(action.payload.data && action.payload.id) {
		yield put(notify(`Uploading new cover...`, 0));
		yield call(storage.post, `covers/${action.payload.id}`, action.payload.data);
		yield put(notify(`covers/${action.payload.id} has been uploaded !`));
	}
}

function* fetchCover(action) {
	if(action.payload) {
		try {
			logger.storage(`GET /covers/${action.payload}`);
			const url = yield call(storage.get, 'covers', action.payload);
			yield put(addCover(action.payload, url));
		} catch(err) {
			if(err.code !== 'storage/object-not-found')
				logger.error(err);
		}
	}
}

function* deleteCover(action) {
	if(action.payload) {
		try {
			logger.storage(`DELETE /covers/${action.payload}`);
			yield call(storage.delete, 'covers', action.payload);
		} catch(err) {
			logger.error(err);
		}
	}
}


function* coverSagas() {
	yield takeEvery(COVERS_CREATE, createCover);
	yield takeEvery(COVERS_FETCH, fetchCover);
	yield takeEvery(COVERS_DELETE, deleteCover);
}

export default coverSagas;
