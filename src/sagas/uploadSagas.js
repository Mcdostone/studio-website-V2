import { UPLOADS_CREATE } from '../actions/uploadActions';
import { call, put, takeEvery, all } from 'redux-saga/effects';
import database from './RestFirebaseDatabase';

function* create(action) {
	const { resource, data } = action.payload;
	try {
		const mediaForSagas = data.media;
		data.media = Object.keys(data.media).reduce((newDataset, idMedium) => {
			newDataset[idMedium] = true;
			return newDataset;
		}, {});
		const dataCreated = yield call(database.post, resource.toLowerCase(), data);
		yield put({type: `${resource.toUpperCase()}_ADD`, payload: [dataCreated]});
		yield all(Object.keys(mediaForSagas).map(idMedium =>
			put({type: 'MEDIA_CREATE', payload: mediaForSagas[idMedium]})
		));
  } catch (e) {
		console.log(e);
	}
}

function* crudSagas() {
	yield takeEvery(UPLOADS_CREATE, create);
}

export default crudSagas;
