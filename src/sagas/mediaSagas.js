import { call, takeEvery, put, select } from 'redux-saga/effects';
import {
	addMedium,
	MEDIA_CREATE,
	MEDIA_FETCH_ONE } from '../actions/mediaActions';
import logger from '../Logger';
import restFirebaseDatabase from './RestFirebaseDatabase';
import { buildMediumFromFirebase, buildMediumFromGoogleDrive } from '../factories';

import GoogleDriveApi from './GoogleDriveApi';

const googleDriveApi = new GoogleDriveApi(window.gapi);

const resource = 'media';

function *createMedium(action) {
	const medium = action.payload;
	let mediumCreated = null;
	switch(medium.from.toUpperCase()) {
		case 'DRIVE':
			medium.src = null;
			mediumCreated = yield call(restFirebaseDatabase.post, resource, medium);
			break;
		default:
		return null;
	}
	yield put(addMedium(mediumCreated));
}


function* fetchFromGoogleDrive(medium) {
	const state = yield select();
	try {
		googleDriveApi.setAccessToken(state.auth.credential.accessToken);
		logger.react(`GET ${medium.id} from google drive`);
		const data = yield call(googleDriveApi.getFile, medium.id);
		return buildMediumFromGoogleDrive(medium, data);
	}
	catch(error) {
		logger.react('test', error);
	}
}

function* createMediumFromFirebase(medium) {
	if(medium) {
		switch(medium.from.toLowerCase().trim()) {
			case 'drive':
				const newMedium = yield call(fetchFromGoogleDrive, medium);
				yield put(addMedium(newMedium));
				break;
			default:
				yield put(addMedium(medium));
		}
	}
}

function *fetchMedium(action) {
	const { resource, id } = action.payload;
	try {
		const snapshot = yield call(restFirebaseDatabase.get,resource, id);
		yield call(createMediumFromFirebase, snapshot.val());
	} catch(err) {
		logger.error(err);
	}
}

function* mediaSagas() {
	yield takeEvery(MEDIA_FETCH_ONE, fetchMedium);
	yield takeEvery(MEDIA_CREATE, createMedium);
}

export default mediaSagas;

/*
function* fetchOne(action) {
		const snapshot = yield call(restFirebaseDatabase.get, action.payload.resource, action.payload.id);
		yield call(createMediumFromFirebase, snapshot.val());
}

function* fetchAll() {
	const snapshot = yield call(restFirebaseDatabase.get, 'media');
	const data = snapshot.val();
	if(data !== null) {
		yield all(Object.keys(data).map(idMedium => {
			return call(createMediumFromFirebase, data[idMedium]);
		}));
	}
}*/
