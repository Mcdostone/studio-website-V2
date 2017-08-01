import { USERS_ADD, USERS_UPDATE } from '../actions/userActions';
import { getById } from '../utils';
import { buildUserFromFirebase } from '../factories';

const initialState = {}

export default function (state = initialState, action) {
	switch(action.type) {

		case USERS_ADD:
			return Object.assign({}, state, getById(buildUserFromFirebase(action.payload)));

		case USERS_UPDATE:
			const newUser = {};
			newUser[action.payload.id] = action.payload;
			return Object.assign({}, state, newUser);

		default:
			return state;
			// eslint-disable-next-line
	};
}
