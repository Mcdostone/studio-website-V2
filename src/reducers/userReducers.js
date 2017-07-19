import { USERS_ADD, USERS_UPDATE } from '../actions/userActions';
import { User } from '../core';
import { buildUniqueDatasetById } from '../utils';


export function buildUser(u) {
	const user = new User(u.id,
	u.givenName,
	u.familyName,
	u.email,
	u.picture,
	u.banned || false,
	Object.keys(u.media || {}));
	user.createdAt = u.created_at;
	user.updatedAt = u.updated_at;
	return user;
}

const initialState = {}

export default function (state = initialState, action) {
	switch(action.type) {
		case USERS_ADD:
			const newUsers = buildUniqueDatasetById(action.payload, buildUser);
			return Object.assign({}, state, newUsers);

		case USERS_UPDATE:
			const newUser = {};
			newUser[action.payload.id] = action.payload;
			return Object.assign({}, state, newUser);

		default:
			return state;
			// eslint-disable-next-line
	};
}
