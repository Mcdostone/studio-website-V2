import { COVER_FETCH, COVER_ADD } from '../actions/coverActions';
import { call, put, takeLatest } from 'redux-saga/effects';
import firebase from 'firebase';


export function requestCover(coverName) {
		return firebase.storage().ref().child(`covers/${coverName}`).getDownloadURL();
}

function* fetchCover(action) {
	try {
		const url = yield call(requestCover, action.payload);
		yield put({type: COVER_ADD, payload: {page: action.payload, url}});
	} catch(err) {
		console.log(err);
	}
}

function* coverSagas() {
	yield takeLatest(COVER_FETCH, fetchCover);
}

export default coverSagas;
