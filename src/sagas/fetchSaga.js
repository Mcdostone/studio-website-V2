import { all, select, call, takeEvery, put } from 'redux-saga/effects';
import restFirebaseDatabase from './RestFirebaseDatabase';
import logger from '../Logger';
import {
	FETCH,
	FETCH_REFS,
	LIST,
	OBJECT,
} from '../actions/fetchActions';


function buildResult(response, dataType) {
	const res = response.val();
	if(res === null)
		return [];
	switch(dataType) {
		case LIST:
			return Object.keys(res).map(r => res[r]);
		case OBJECT:
			return res !== undefined ? [res] : [];
		default:
		return res;
	}
}

function exist(action, state) {
	const {resource, param, dataType} = action.payload;
	return dataType === OBJECT && state[resource][param] !== undefined;
}

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


export default function* fetchSaga() {
	yield takeEvery(FETCH, fetch);
	yield takeEvery(FETCH_REFS, fetchReferences);
}
