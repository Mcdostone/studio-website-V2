import { TAGS_ADD, TAGS_DELETE } from '../actions/tagActions';
import { getById } from '../utils';
import { buildTagFromFirebase } from '../factories';

const initialState = {};

export default function (state = initialState, action) {
	switch(action.type) {
		case TAGS_ADD:
			return Object.assign({}, state, getById(buildTagFromFirebase(action.payload)));

			case TAGS_DELETE:
			delete state[action.payload.id];
			return Object.assign({}, state);

		default:
			return state;
			// eslint-disable-next-line
	};
}
