import { call, takeLatest, put, select, all } from 'redux-saga/effects';
import firebase from 'firebase';
import { Event } from '../core';
import logger from '../Logger';
import { FETCH_EVENTS, ADD_EVENTS } from '../actions/eventsActions';
import { requestCover } from './coverSagas';


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
		const snapshot = yield call(() => firebase.database().ref().child('events').once('value'));
		const eventsData = snapshot.val();
		const newEvents = yield all(Object.keys(eventsData).map(id => call(fetchCoverEventAndBuild, id, eventsData[id])));
		yield put({type: ADD_EVENTS, payload: newEvents});
	} catch(err) {
		logger.react(err);
	}
}

function* mediaSagas() {
	yield takeLatest(FETCH_EVENTS, fetchAll);
}

export default mediaSagas;

