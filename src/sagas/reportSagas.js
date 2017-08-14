import { call, takeEvery, put } from 'redux-saga/effects';
import { addReport, REPORTS_CREATE, REPORTS_DELETE } from 'actions/reportActions';
import { notify } from '../actions/notificationActions';
import database from './RestFirebaseDatabase';

const resource = 'reports';

function* create(action) {
	if(action.payload) {
		const reportCreated = yield call(database.post, resource.toLowerCase(), action.payload);
		yield put(notify('Your report has been sent'));
		yield put(addReport(reportCreated));
	}
}

function* deleteReport(action) {
	yield call(database.delete, resource.toLowerCase(), action.payload.id);
}

function* reportSagas() {
	yield takeEvery(REPORTS_CREATE, create);
	yield takeEvery(REPORTS_DELETE, deleteReport);
}

export default reportSagas;
