import { CRUD_UPDATE, CRUD_CREATE, CRUD_DELETE } from '../actions/crudActions';
import { COVER_CREATE } from '../actions/coverActions';
import { call, put, takeEvery } from 'redux-saga/effects';
import restFirebaseDatabase from './RestFirebaseDatabase';


function* create(action) {
	const { resource, data } = action.payload;
	try {
		const dataCreated = yield call(restFirebaseDatabase.post, resource.toLowerCase(), data);
		yield put({type: `${resource.toUpperCase()}_ADD`, payload: [dataCreated]});
  } catch (e) {
		console.log(e);
	}
}

function* update(action) {
	const { resource, data } = action.payload;
	try {
		const dataUpdated = yield call(restFirebaseDatabase.put, resource.toLowerCase(), data);
		yield put({type: `${resource.toUpperCase()}_UPDATE`, payload: dataUpdated.response});
  } catch (e) {
		console.log(e);
	}
}

function* del(action) {
	const { resource, id } = action.payload;
	try {
		yield call(restFirebaseDatabase.delete, resource.toLowerCase(), id);
		yield put({type: `${resource.toUpperCase()}_DELETE`, payload: id});
  } catch (e) {
		console.log(e);
	}
}

function* crudSagas() {
	yield takeEvery(CRUD_CREATE, create);
	yield takeEvery(CRUD_UPDATE, update);
	yield takeEvery(CRUD_DELETE, del);
}

export default crudSagas;
