import { call, put, takeLatest } from 'redux-saga/effects';
// import { delay } from 'redux-saga';
import {
	MEDIA_FETCH,
	MEDIA_FETCH_SUCCESS,
	MEDIA_FETCH_FAILURE,
	ADD_MEDIA,
	MEDIA_LOADING } from '../actions/mediaListActions';

import 'isomorphic-fetch';
require('es6-promise').polyfill()

const request = () => {
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
	// yield delay(3000);
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

function* mediaListSaga() {
	yield takeLatest(MEDIA_FETCH, fetchMedia);
}

export default mediaListSaga;
