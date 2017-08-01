import { call, takeEvery, put } from 'redux-saga/effects';
import { ALBUMS_CREATE, ALBUMS_UPDATE, addAlbum, ALBUMS_DELETE } from '../actions/albumActions';
import { createCover, deleteCover } from '../actions/coverActions';
import database from './RestFirebaseDatabase';

const resource = 'albums';

function* create(promise, action) {
	const cover = action.payload.cover;
	if(cover)
		action.payload.cover = null;
	const albumCreated = yield call(promise, resource.toLowerCase(), action.payload);
	yield put(addAlbum(albumCreated));
	yield put(createCover(albumCreated.id, cover));
}

function* remove(action) {
	yield call(database.delete, resource.toLowerCase(), action.payload.id);
	yield put(deleteCover(action.payload.id));
}

function* albumSagas() {
	yield takeEvery(ALBUMS_CREATE, create, database.post);
	yield takeEvery(ALBUMS_UPDATE, create, database.put);
	yield takeEvery(ALBUMS_DELETE, remove);
}

export default albumSagas;
