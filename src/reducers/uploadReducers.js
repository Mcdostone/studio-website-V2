import { UPLOADS_ADD } from '../actions/uploadActions';
import { Upload } from '../core';
import { buildUniqueDatasetById } from '../utils';

const initialState = {}

function buildUpload(u) {
	const upload = new Upload(u.id, u.author, u.media);
	upload.createdAt = u.created_at;
	upload.updatedAt = u.updated_at;
	return upload;
}

export default function (state = initialState, action) {
	switch(action.type) {
		case UPLOADS_ADD:
			return Object.assign({}, state, buildUniqueDatasetById(action.payload, buildUpload));

		default:
			return state;
			// eslint-disable-next-line
	};
}
