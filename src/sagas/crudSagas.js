import { CRUD_UPDATE } from '../actions/crudActions';
import { call, put, takeEvery } from 'redux-saga/effects';
import restFirebaseDatabase from './RestFirebaseDatabase';


function* update(action) {
	const { resource, data } = action.payload;
	try {
		yield call(restFirebaseDatabase.put, resource.toLowerCase(), data);
		yield put({type: `${resource.toUpperCase()}_UPDATE`, payload: data});
  } catch (e) {
		console.log(e);
	}
}

function* crudSagas() {
	yield takeEvery(CRUD_UPDATE, update);
}

export default crudSagas;
