import { call, takeEvery, put, select } from 'redux-saga/effects';
import logger from '../Logger';
import database from './RestFirebaseDatabase';
import { buildMediumFromGoogleDrive } from '../factories';
import { updateAlbum } from '../actions/albumActions';
import {
	addMediumWithSrc,
	MEDIA_CREATE,
	MEDIA_UPDATE,
	MEDIA_TAG,
	MEDIA_LIKE,
	MEDIA_DELETE,
	updateMedium,
	MEDIA_FETCH_ONE } from '../actions/mediaActions';
import { addTag } from '../actions/tagActions';
import GoogleDriveApi from './GoogleDriveApi';

const googleDriveApi = new GoogleDriveApi(window.gapi);
const resource = 'media';

function *createMedium(action) {
	const medium = action.payload;
	let mediumCreated = null;

	let oldMedium = yield call(database.get, resource, medium.id);
	oldMedium = oldMedium.val();
	if(oldMedium) {
		if(oldMedium.album && !medium.album) {
			const album = yield select(state => state.albums[oldMedium.album])
			delete album.media[medium.id];
			yield put(updateAlbum(album));
		}
	}

	switch(medium.from.toUpperCase()) {
		case 'DRIVE':
			medium.src = null;
			mediumCreated = yield call(database.post, resource, medium);
			break;
		default:
		return null;
	}

	if(mediumCreated.album) {
		const album = yield select(state => state.albums[mediumCreated.album])
		album.addMedium(mediumCreated)
		yield put(updateAlbum(album));
	}

	yield put(addMediumWithSrc(mediumCreated));
}


function* fetchFromGoogleDrive(medium) {
	const credential = yield select(state => state.auth.credential);
	try {
		googleDriveApi.setAccessToken(credential.accessToken);
		logger.react(`GET ${medium.id} from google drive`);
		const data = yield call(googleDriveApi.getFile, medium.id);
		return buildMediumFromGoogleDrive(medium, data);
	}
	catch(error) {
		logger.error('', error);
	}
}

function* createMediumFromFirebase(medium) {
	if(medium) {
		switch(medium.from.toLowerCase().trim()) {
			case 'drive':
				const newMedium = yield call(fetchFromGoogleDrive, medium);
				yield put(addMediumWithSrc(newMedium));
				break;
			default:
				// yield put(addMedium(medium));
		}
	}
}

function *fetchMedium(action) {
	const { resource, id } = action.payload;
	try {
		const snapshot = yield call(database.get, resource, id);
		yield call(createMediumFromFirebase, snapshot.val());
	} catch(err) {
		logger.error(err);
	}
}

function *deleteMedium(action) {
	const medium = action.payload;
	if(medium.album) {
		const album = yield select(state => state.albums[medium.album]);
		if(album)
			delete album.media[medium.id];

		yield put(updateAlbum(album));
	}
	yield call(database.delete, resource, medium.id);
}

function *likeMedium(action) {
	const { medium, user } = action.payload;
	if(user !== undefined) {
		medium.like(user.id);
		yield put(updateMedium(medium));
	}
}

function *tagMedium(action) {
	const { medium, tag } = action.payload;
	if(tag.id === undefined) {
		const user = yield select(state => state.auth.user);
		if(user !== undefined) {
			tag.author = user.id;
			const tagCreated = yield call(database.post, 'tags', tag);
			yield put(addTag(tagCreated));
			medium.addTag(tagCreated.id);
		}
	}
	else
		medium.addTag(tag.id);
	yield put(updateMedium(medium));
}

function* mediaSagas() {
	yield takeEvery(MEDIA_FETCH_ONE, fetchMedium);
	yield takeEvery(MEDIA_UPDATE, createMedium);
	yield takeEvery(MEDIA_CREATE, createMedium);
	yield takeEvery(MEDIA_DELETE, deleteMedium);
	yield takeEvery(MEDIA_LIKE, likeMedium);
	yield takeEvery(MEDIA_TAG, tagMedium);
}

export default mediaSagas;
