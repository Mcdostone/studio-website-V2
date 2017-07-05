/*import { call, put, takeLatest, select } from 'redux-saga/effects';
import { EVENTS_FETCH } from '../actions/eventActions';
import { FETCH } from '../actions/fetchActions';
import RestFirebaseStorage from './RestFirebaseStorage';

const storage = new RestFirebaseStorage();

function* getEvent(action) {
	const state = yield select();
	const id = action.payload;
	if(id && state.events[id] === undefined) {
		try {
			yield put({type: FETCH, payload: {resource: 'events', param: action.payload }});
		} catch(err) {
			console.log(err);
		}
	}
}

function* eventSagas() {
	yield takeLatest(EVENTS_FETCH, getEvent);
}

export default eventSagas;
*/
