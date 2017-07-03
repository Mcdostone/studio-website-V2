/*import { call, takeLatest, put, select, all } from 'redux-saga/effects';
import firebase from 'firebase';
import { Event } from '../core';
import logger from '../Logger';
import { FETCH_TYPES, ADD_TYPES } from '../actions/typesActions';
//import { requestCover } from './coverSagas';


function buildEvent(id, name, date, cover = '') {
	return new Event(id, name, date, cover);
}

function* fetchCoverEventAndBuild(id, event) {
	try {
		const urlCover = yield call(requestCover, event.cover);
		return buildEvent(id, event.name, event.date, urlCover);
	} catch(err) {
		return buildEvent(id, event.name, event.date);
	}
}

function* fetchAll(action) {
	const state = yield select();
	try {
		if(state.auth.authentificated === false) {
			throw new Error('You should be connected');
		}
		const snapshot = yield call(() => firebase.database().ref().child('types').once('value'));
		const eventsData = snapshot.val();
	//	const newEvents = yield all(Object.keys(eventsData).map(id => call(fetchCoverEventAndBuild, id, eventsData[id])));
		yield put({type: ADD_TYPES, payload: newEvents});
	} catch(err) {
		logger.react(err);
	}
}

function* mediaSagas() {
	yield takeLatest(FETCH_TYPES, fetchAll);
}

export default mediaSagas;

*/
