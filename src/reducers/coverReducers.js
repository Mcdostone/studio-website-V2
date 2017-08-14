import { COVERS_ADD, COVERS_DELETE } from '../actions/coverActions';
import { buildCoverFromFirebase, buildCover } from '../factories';
import { getById } from '../utils';

const initialState = {
	media: buildCover('media'),
	albums: buildCover('albums'),
};

export default function (state = initialState, action) {
  switch(action.type) {
		case COVERS_ADD:
			return Object.assign({}, state, getById(buildCoverFromFirebase(action.payload)));

		case COVERS_DELETE:
			delete state[action.payload];
			return Object.assign({}, state);

		default:
			return state;
			// eslint-disable-next-line
	}
}
