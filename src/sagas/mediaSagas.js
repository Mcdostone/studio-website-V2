import { call, takeEvery, put, select } from 'redux-saga/effects';
import { Medium } from '../core';
import { MEDIA_FETCH, MEDIA_ADD } from '../actions/mediaActions';
import logger from '../Logger';
import restFirebaseDatabase from './RestFirebaseDatabase';
import GoogleDriveApi from './GoogleDriveApi';


const googleDriveApi = new GoogleDriveApi(window.gapi);

function buildMedium(medium, src) {
	return new Medium(medium.id, src, medium.from, medium.likes, medium.events, medium.types);
}

function* buildMediumFromGoogleDrive(medium) {
	const state = yield select();
	logger.react(`GET ${medium.id} from google drive`);
	googleDriveApi.setAccessToken(state.auth.user.credentials.accessToken);
	const data = yield call(googleDriveApi.getFile, medium.id);
	return buildMedium(medium, data.thumbnailLink.split('=')[0]);
}

function* createMediumFromFirebase(medium) {
	switch(medium.from.toLowerCase().trim()) {
		case 'drive':
			return yield call(buildMediumFromGoogleDrive, medium);
		default:
		return buildMedium(medium, medium.src);
	}
}

function* fetchMedia(action) {
	const state = yield select();
	try {
		if(state.auth.authentificated === false) {
			throw new Error('You should be connected to use google drive API');
		}
		const snapshot = yield call(restFirebaseDatabase.get, action.payload.resource, action.payload.param);
		const newMedium = yield call(createMediumFromFirebase, snapshot.val());
		yield put({type: MEDIA_ADD, payload: newMedium});
	} catch(err) {
		logger.error(err);
	}
}

function* mediaSagas() {
	yield takeEvery(MEDIA_FETCH, fetchMedia);
}

export default mediaSagas;

