import { LOGIN, LOGOUT, LOGIN_FROM_SESSION_STORAGE } from '../actions/authActions';
import { User } from '../core';
import config from '../configuration';


const initialState = {
		authentificated: false,
		user: null,
};

export default function (state = initialState, action) {
	switch(action.type) {
		case LOGIN_FROM_SESSION_STORAGE:
			const userStorageData = JSON.parse(sessionStorage.getItem(config.APP.LOCAL_STORAGE_KEY));
			if(userStorageData !== null) {
				const {authentificated, user} = userStorageData;
				const userObject = new User(user.id, user.givenName, user.familyName, user.email, user.picture, user.banned, user.media)
				userObject.credential = userStorageData.user.credential;
				userObject.createdAt = userStorageData.user.created_at;
				userObject.updatedAt = userStorageData.user.updated_at;
				return Object.assign({}, state, {authentificated, user: userObject});
			}
			return state;

		case LOGIN:
			const newState = {authentificated: true, user: action.payload};
			sessionStorage.setItem(config.APP.LOCAL_STORAGE_KEY , JSON.stringify(newState));
			return Object.assign({}, state, newState);

		case LOGOUT:
			sessionStorage.removeItem(config.APP.LOCAL_STORAGE_KEY);
			return Object.assign({}, state, initialState);

		default:
			return state;
	}
}
