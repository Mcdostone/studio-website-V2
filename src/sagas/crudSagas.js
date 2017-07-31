import { CRUD_UPDATE, CRUD_CREATE, CRUD_DELETE } from '../actions/crudActions';
import { put, takeEvery } from 'redux-saga/effects';
import pluralize from 'pluralize';
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
		logger.info(`UPDATE ${pluralize.singular(resource.toLowerCase())} ${data.id}`);
		yield put({type: `${resource.toUpperCase()}_UPDATE`, payload: data});
  } catch (e) {
		console.log(e);
	}
}

function* del(action) {
	const { resource, data } = action.payload
	try {
		logger.info(`DELETE ${pluralize.singular(resource.toLowerCase())} ${data.id}`);
		yield put({type: `${resource.toUpperCase()}_DELETE`, payload: data});
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
