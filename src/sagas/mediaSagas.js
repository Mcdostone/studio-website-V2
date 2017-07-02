import { call, takeLatest, put, select } from 'redux-saga/effects';
import { Medium } from '../core';
import { MEDIA_FETCH, MEDIA_ADD } from '../actions/mediaActions';
import firebase from 'firebase';
import logger from '../Logger';
import GoogleDriveApi from './GoogleDriveApi';

const googleDriveApi = new GoogleDriveApi(window.gapi);

function buildMedium(id, src, type, from, likes = []) {
	return new Medium(id, src, type, from, likes);
}

function* buildMediumFromGoogleDrive(medium) {
	const state = yield select();
	googleDriveApi.setAccessToken(state.auth.user.credentials.accessToken);
	const data = yield call(googleDriveApi.getFile, medium.src);
	return buildMedium(medium.src, data.thumbnailLink, medium.type, medium.from, medium.likes);
}

function buildMediumFromWeb(medium) {
	return buildMedium(medium.src, medium.type, medium.from, medium.likes);
}

function* createMediaFromFirebase(mediaData) {
	const mediaArray = Object.keys(mediaData).map(key => mediaData[key]);
	return yield mediaArray.map(medium => {
		switch(medium.from.toLowerCase().trim()) {
			case 'drive':
				return call(buildMediumFromGoogleDrive, medium);
			default:
			return buildMediumFromWeb(medium);
		}
	})
}

function* fetchMedia(action) {
	const state = yield select();
	try {
		if(state.auth.authentificated === false) {
			throw new Error('You should be connected to use google drive API');
		}
		const snapshot = yield call(() => firebase.database().ref().child('media').once('value'));
		const newMedia = yield call(createMediaFromFirebase, snapshot.val());
		yield put({type: MEDIA_ADD, payload: newMedia});
	} catch(err) {
		logger.react(err);
	}
}

function* mediaSagas() {
	yield takeLatest(MEDIA_FETCH, fetchMedia);
}

export default mediaSagas;

