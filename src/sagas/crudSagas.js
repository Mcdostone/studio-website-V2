import { CRUD_UPDATE, CRUD_CREATE, CRUD_DELETE } from '../actions/crudActions';
import { call, put, takeEvery } from 'redux-saga/effects';
import pluralize from 'pluralize';
import restFirebaseDatabase from './RestFirebaseDatabase';
import logger from '../Logger';

function* create(action) {
	const { resource, data } = action.payload;
	try {
		logger.info(`CREATE ${pluralize.singular(resource.toLowerCase())}`);
		yield put({type: `${resource.toUpperCase()}_CREATE`, payload: data});
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
