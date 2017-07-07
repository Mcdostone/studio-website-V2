import { USERS_ADD } from '../actions/userActions';
import { User } from '../core';

const initialState = {}

function buildUser(user) {
	return new User(user.id, user.given_name, user.family_name, user.name, user.picture, user.updatedAt, user.media);
}

export default function (state = initialState, action) {
	switch(action.type) {
		case USERS_ADD:
			console.log(buildUser(action.payload));
			/*const types = buildUniqueDatasetById(action.payload, buildType);
			return Object.assign({}, state, types);*/
			return state;
		default:
			return state;
			// eslint-disable-next-line
	};
}
