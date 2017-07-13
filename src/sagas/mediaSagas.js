import { all, call, takeEvery, put, select } from 'redux-saga/effects';
import { Medium, Exif } from '../core';
import { MEDIA_FETCH, MEDIA_ADD, MEDIA_FETCH_ALL } from '../actions/mediaActions';
import logger from '../Logger';
import restFirebaseDatabase from './RestFirebaseDatabase';
import GoogleDriveApi from './GoogleDriveApi';


const googleDriveApi = new GoogleDriveApi(window.gapi);

function buildMedium(medium, src, exif = new Exif()) {
	return new Medium(medium.id, src, medium.from, medium.likes, medium.events, medium.types, exif);
}

function buildExifFromGoogleDrive(driveData) {
	const exif =  new Exif();
	const exifData = driveData.imageMediaMetadata;
	if(exifData) {
		exif.addMetadata('camera', exifData.cameraModel);
		exif.addMetadata('lens', exifData.lens);
		exif.addMetadata('exposure', exifData.exposureTime);
		exif.addMetadata('aperture', exifData.aperture);
		exif.addMetadata('iso', exifData.isoSpeed);
	}
	return exif;
}

function* buildMediumFromGoogleDrive(medium) {
	const state = yield select();
	logger.react(`GET ${medium.id} from google drive`);
	googleDriveApi.setAccessToken(state.auth.user.credentials.accessToken);
	const data = yield call(googleDriveApi.getFile, medium.id);
	return buildMedium(medium, data.thumbnailLink.split('=')[0], buildExifFromGoogleDrive(data))
}

function* createMediumFromFirebase(medium) {
	console.log(medium);
	const state = yield select();
	switch(medium.from.toLowerCase().trim()) {
		case 'drive':
			if(state.auth.authentificated === true) {
				const newMedium = yield call(buildMediumFromGoogleDrive, medium);
				yield put({type: MEDIA_ADD, payload: newMedium});
			}
			else {
				logger.error('You should be connected to use google drive API');
			}

			break;
		default:
			yield put({type: MEDIA_ADD, payload: buildMedium(medium, medium.src)});
	}
}


function* fetchMedia(action) {
	console.log(action);
	const snapshot = yield call(restFirebaseDatabase.get, action.payload.resource, action.payload.param);
	yield call(createMediumFromFirebase, snapshot.val());
}

function* fetchAll() {
	const snapshot = yield call(restFirebaseDatabase.get, 'media');
	const data = snapshot.val();
	yield all(Object.keys(data).map(idMedium => {
		return call(createMediumFromFirebase, data[idMedium]);
	}));
}

function* mediaSagas() {
	yield takeEvery(MEDIA_FETCH, fetchMedia);
	yield takeEvery(MEDIA_FETCH_ALL, fetchAll);
}

export default mediaSagas;

