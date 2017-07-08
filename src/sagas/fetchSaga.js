import { all, select, call, takeEvery, put } from 'redux-saga/effects';
import restFirebaseDatabase from './RestFirebaseDatabase';
import logger from '../Logger';
import {
	FETCH,
	LIST,
	OBJECT,
} from '../actions/fetchActions';


function buildResult(response, dataType) {
	const res = response.val();
	switch(dataType) {
		case LIST:
			return Object.keys(res).map(r => res[r]);
		case OBJECT:
			return [res];
		default:
		return res;
	}
}

function exist(action, state) {
	const {resource, param, dataType} = action.payload;
	return dataType === OBJECT && state[resource][param] !== undefined;
	// || dataType === LIST && state[resource].length === 0
}

export function* fetch(action) {
	const promise = restFirebaseDatabase.get;
	const {resource, param, dataType, refs} = action.payload;
	const state = yield select();
	if(!exist(action, state)) {
		logger.react(`[FIREBASE-DB] GET ${dataType} /${resource}${param === undefined ? '' : `/${param}`}`);
		try {
			const response = yield call(promise, resource.toLowerCase(), param);
			const result = buildResult(response, action.payload.dataType);
			yield put({type: `${resource.toUpperCase()}_ADD`, payload: result});
			yield fetchReferences(resource, param, refs);
		} catch(err) {
			logger.error(err);
		}
	}
	else {
		yield fetchReferences(resource, param, refs);
	}

}

function* fetchReferences(resource, param, refs) {
	if(refs) {
		logger.info(`[FIREBASE-DB] GET /${resource}${param === undefined ? '' : `/${param}`}/${refs}`);
		const state = yield select();
		const data = state[resource][param];
		if(data[refs] !== undefined) {
			yield all(data[refs].map(r =>
				put({type: `${refs.toUpperCase()}_${FETCH}`, payload: {dataType: OBJECT, resource: refs, param: r}})
			));
		}
	}
}


export default function* fetchSaga() {
	yield takeEvery(FETCH, fetch);
}
