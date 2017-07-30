import { all, call, takeEvery, put } from 'redux-saga/effects';
import database from './RestFirebaseDatabase';
import { FETCH_ALL } from '../actions/fetchActions';
import logger from '../Logger';
/*

export function* fetch(action) {
	const promise = restFirebaseDatabase.get;
	const {resource, param, dataType} = action.payload;
	const state = yield select();
	if(!exist(action, state)) {
		logger.react(`[FIREBASE-DB] GET ${dataType} /${resource}${param === undefined ? '' : `/${param}`}`);
		try {
			const response = yield call(promise, resource.toLowerCase(), param);
			const result = buildResult(response, action.payload.dataType);
			yield put({type: `${resource.toUpperCase()}_ADD`, payload: result});
		} catch(err) {
			logger.error(err);
		}
	}
}

function* fetchOne(action) {
	const {resource, id } = action.payload;
	logger.react(`[FIREBASE-DB] GET /${resource}${id === undefined ? '' : `/${id}`}`);
	try {
		const response = yield call(restFirebaseDatabase.get, resource.toLowerCase(), id);
		const result = buildResult(response, OBJECT);
		yield put({type: `${resource.toUpperCase()}_ADD`, payload: result});
	} catch(err) {
		logger.error(err);
	}
}

function* fetchReferences(action) {
	const state = yield select();
	const {resource, param, refs} = action.payload;
	let dataSource = state[resource][param];
	if(state.auth.authentificated === false) {
		logger.error(`You have to be connected !`);
		return;
	}
	if(dataSource === undefined) {
		logger.info(`[FIREBASE-DB] GET /${resource}${param === undefined ? '' : `/${param}`}/${refs}`);
		const response = yield call(restFirebaseDatabase.get, resource.toLowerCase(), param);
		dataSource = response.val();
		const result = buildResult(response, action.payload.dataType);
		yield put({type: `${resource.toUpperCase()}_ADD`, payload: result});
	}
	if(dataSource[refs] !== undefined) {
			yield all(Object.keys(dataSource[refs]).map(r =>
				put({type: `${refs.toUpperCase()}_${FETCH}`, payload: {dataType: OBJECT, resource: refs, param: r}})
			));
		}
}
*/

export function* fetchAll(action) {
	const { resource } = action.payload;
	logger.database(`GET /${resource}`);
	try {
		let response = yield call(database.get, resource.toLowerCase(), undefined);
		response = response.val();
		yield all(Object.keys(response).map(albumId =>
			put({type: `${resource.toUpperCase()}_ADD`, payload: response[albumId]})
		));
	} catch(err) {
		logger.error(err);
	}
}

export default function* fetchSagas() {
	yield takeEvery(FETCH_ALL, fetchAll);
//	yield takeEvery(FETCH_ONE, fetchOne);
}
