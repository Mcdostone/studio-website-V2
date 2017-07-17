import { USERS_ADD, USERS_UPDATE } from '../actions/userActions';
import { User } from '../core';
import { buildUniqueDatasetById } from '../utils';


const initialState = {}

function buildUser(user) {
	return new User(user.id,
	user.given_name,
	user.family_name,
	user.email,
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

		case USERS_UPDATE:
			const newUser = {};
			console.log(action);
			newUser[action.payload.id] = action.payload;
			return Object.assign({}, state, newUser);

		default:
			return state;
			// eslint-disable-next-line
	};
}
