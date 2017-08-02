import { UPLOADS_CREATE, addUpload } from '../actions/uploadActions';
import { call, put, takeEvery, all} from 'redux-saga/effects';
import database from './RestFirebaseDatabase';

const resource = 'uploads';

function* create(action) {
	const upload = action.payload;
	const mediaForSagas = upload.media;
	upload.media = Object.keys(upload.media).reduce((newDataset, idMedium) => {
		newDataset[idMedium] = true;
		return newDataset;
	}, {});
	const uploadCreated = yield call(database.post, resource.toLowerCase(), upload);
	yield put(addUpload(uploadCreated));
	yield all(Object.keys(mediaForSagas).map(idMedium =>
		put({type: 'MEDIA_CREATE', payload: mediaForSagas[idMedium]})
	));
}

function* crudSagas() {
	yield takeEvery(UPLOADS_CREATE, create);
}

export default crudSagas;
