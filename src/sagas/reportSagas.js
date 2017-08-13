import { call, takeEvery, put } from 'redux-saga/effects';
import { addReport, REPORTS_CREATE } from 'actions/reportActions';
import database from './RestFirebaseDatabase';

const resource = 'reports';

function* create(action) {
	if(action.payload) {
		const reportCreated = yield call(database.post, resource.toLowerCase(), action.payload);
		yield put(addReport(reportCreated));
	}
}

function* reportSagas() {
	yield takeEvery(REPORTS_CREATE, create);
}

export default reportSagas;
