import { COVER_FETCH, COVER_CREATE, COVER_ADD } from '../actions/coverActions';
import { notify } from '../actions/notificationActions';
import { take, call, put, takeEvery } from 'redux-saga/effects';
import { buffers, eventChannel } from 'redux-saga';
import storage from './RestFirebaseStorage';
import logger from '../Logger';


function* uploadProgressChannel(resource, id, data) {
	return storage.post(`${resource}/${id}`, data);
}

function* notifyUploadProgress(snapshot) {
	const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
}

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
