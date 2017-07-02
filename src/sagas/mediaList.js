import { call, put, takeLatest, takeEvery, select } from 'redux-saga/effects';
import GoogleDriveApi from './GoogleDriveApi';
import logger from '../Logger';
import {
	MEDIA_FETCH,
	MEDIA_FETCH_SUCCESS,
	MEDIA_FETCH_FAILURE,
	MEDIA_ADD,
	MEDIA_LOADING } from '../actions/mediaActions';


const googleDriveApi = new GoogleDriveApi(window.gapi);


function* request() {
	return fetch('https://jsonplaceholder.typicode.com/photos')
	.then(function(response) {
		return response.json();
	}).then(function(json) {
		return json;
	}).catch(function(ex) {
		throw new Error('fucked up');
  });
}

function* fetchMedia(action) {
	yield put({type: MEDIA_LOADING});
	try {
		let data = yield call(request);
		// yield delay(5000);
		data = data.slice(action.payload, action.payload + 20);
		const newMedia = data.map(medium => {
			return {
				type: 'picture',
				likes: medium.id,
				src: medium.url,
			}
		});
		yield put({type: MEDIA_FETCH_SUCCESS});
		yield put({type: ADD_MEDIA, payload: newMedia});
	}
	catch(exception) {
		yield put({type: MEDIA_FETCH_FAILURE});
	}
}

function* fetchDriveMedium(action) {
		const state = yield select();
		logger.react('authentificated: ' + state.auth.authentificated);
		if(state.auth.authentificated === true) {
			googleDriveApi.setAccessToken(state.auth.user.credentials.accessToken);
			const medium = yield call(googleDriveApi.getFile, action.payload);
			const newMedium = {
				id: medium.id,
				src: medium.thumbnailLink,
				type: 'picture',
				likes: medium.version
			}
			yield put({type: ADD_MEDIA, payload: [newMedium]});
		}
}

function* mediaListSaga() {
	yield takeLatest(MEDIA_FETCH, fetchMedia);
}

export default mediaListSaga;
