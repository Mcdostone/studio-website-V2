import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
	COVERS_FETCH,
	COVERS_CREATE,
	addCover,
	fetchCover,
	COVERS_DELETE,
	COVERS_UPDATE,
	COVERS_FETCH_ALL } from '../actions/coverActions';
import { notify } from '../actions/notificationActions';
import storage from './RestFirebaseStorage';
import database from './RestFirebaseDatabase';
import logger from '../Logger';

function* createCover(action) {
	if(action.payload.data && action.payload.id) {
		yield put(notify(`Uploading new cover...`, 0));
		yield call(storage.post, `covers/${action.payload.id}`, action.payload.data);
		yield put(notify(`covers/${action.payload.id} has been uploaded !`));
	}
}

function* updateCover(action) {
	if(action.payload) {
		yield put(notify(`Uploading new cover...`, 0));
		yield call(storage.post, `covers/${action.payload.id}`, action.payload.cover);
		yield put(notify(`covers/${action.payload.id} has been uploaded !`));
	}
}

function* fetchCoverSaga(action) {
	if(action.payload) {
		const { resource, id, coverResource } = action.payload;
		try {
			logger.storage(`GET /${resource}/${id}`);
			const url = yield call(storage.get, resource, id);
			yield put(addCover(id, url, coverResource));
		} catch(err) {
			if(err.code !== 'storage/object-not-found')
				logger.error(err);
		}
	}
}

function* fetchAllCovers(action) {
	const { resource } = action.payload;
	yield put(fetchCover(resource, 'media'));
	yield put(fetchCover(resource, 'albums'));
	const snapshot = yield call(database.get, 'albums');
	const albums = snapshot.val();
	yield all(Object.keys(albums).map(idAlbum => put(fetchCover(resource, idAlbum, 'albums'))));
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
	yield takeEvery(COVERS_FETCH, fetchCoverSaga);
	yield takeEvery(COVERS_FETCH_ALL, fetchAllCovers);
	yield takeEvery(COVERS_UPDATE, updateCover);
	yield takeEvery(COVERS_DELETE, deleteCover);
}

export default coverSagas;
