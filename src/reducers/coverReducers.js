import { COVER_ADD } from '../actions/coverActions';
import { buildCoverFromFirebase } from '../factories';
import { getById } from '../utils';

const initialState = {};

export default function (state = initialState, action) {
  switch(action.type) {
		case COVER_ADD:
			return Object.assign({}, state, getById(buildCoverFromFirebase(action.payload)));

		default:
			return state;
			// eslint-disable-next-line
	}
}
