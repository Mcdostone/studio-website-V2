import { USERS_ADD } from '../actions/userActions';
import { User } from '../core';
import { buildUniqueDatasetById } from '../utils';


const initialState = {}

function buildUser(user) {
	return new User(user.id,
	user.given_name,
	user.family_name,
	user.picture,
	user.updatedAt,
	user.banned || false,
	Object.keys(user.media || {}));
}

export default function (state = initialState, action) {
	switch(action.type) {
		case USERS_ADD:
			const newUsers = buildUniqueDatasetById(action.payload, buildUser);
			return Object.assign({}, state, newUsers);
		default:
			return state;
			// eslint-disable-next-line
	};
}
