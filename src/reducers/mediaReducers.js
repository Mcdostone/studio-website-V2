import { MEDIA_ADD, MEDIA_DELETE, MEDIA_ADD_WITH_SRC } from '../actions/mediaActions';
import { getById } from '../utils';
import { buildMediumFromFirebase } from '../factories';

const initialState = {};

export default function (state = initialState, action) {
	switch(action.type) {
		case MEDIA_ADD:
			return Object.assign({}, state, getById(buildMediumFromFirebase(action.payload)));

		case MEDIA_ADD_WITH_SRC:
			return Object.assign({}, state, getById(action.payload));

		case MEDIA_DELETE:
			const newState = state;
			delete newState[action.payload.id];
			return Object.assign({}, newState);

		default:
			return state;
			// eslint-disable-next-line
	};
}
