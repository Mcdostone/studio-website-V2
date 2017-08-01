import { UPLOADS_ADD } from '../actions/uploadActions';
import { getById } from '../utils';
import { buildUploadFromFirebase } from '../factories';

const initialState = {}

export default function (state = initialState, action) {
	switch(action.type) {
		case UPLOADS_ADD:
			return Object.assign({}, state, getById(buildUploadFromFirebase(action.payload)));

		default:
			return state;
			// eslint-disable-next-line
	};
}
