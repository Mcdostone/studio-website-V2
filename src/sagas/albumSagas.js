import { call, takeEvery, put } from 'redux-saga/effects';
import { ALBUMS_CREATE, addAlbum } from '../actions/albumActions';
import { createCover } from '../actions/coverActions';
import database from './RestFirebaseDatabase';
import { buildAlbumFromFirebase } from '../factories';

const resource = 'albums';

function* create(action) {
	const cover = action.payload.cover;
	action.payload.cover = null;
	const albumCreated = yield call(database.post, resource.toLowerCase(), action.payload);
	yield put(addAlbum(buildAlbumFromFirebase(albumCreated)));
	yield put(createCover(albumCreated.id, cover));
}

function* albumSagas() {
	yield takeEvery(ALBUMS_CREATE, create);
}

export default albumSagas;
