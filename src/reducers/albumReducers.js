import { ALBUMS_ADD, ALBUMS_DELETE } from '../actions/albumActions';
import { getById } from '../utils';
import { buildAlbumFromFirebase } from '../factories';

const initialState = {};

export default function (state = initialState, action) {
	switch(action.type) {
		case ALBUMS_ADD:
			return Object.assign({}, state, getById(buildAlbumFromFirebase(action.payload)));

			case ALBUMS_DELETE:
			delete state[action.payload.id];
			return Object.assign({}, state);

		default:
			return state;
			// eslint-disable-next-line
	};
}
