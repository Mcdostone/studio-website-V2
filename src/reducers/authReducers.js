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
				return Object.assign({}, state, {authentificated, user: userObject});
			}
			return state;

		case LOGIN:
			sessionStorage.setItem(config.APP.LOCAL_STORAGE_KEY , JSON.stringify(action.payload));
			return Object.assign({}, state, action.payload);

		case LOGOUT:
			sessionStorage.removeItem(config.APP.LOCAL_STORAGE_KEY);
			return Object.assign({}, state, initialState);

		default:
			return state;
	}
}
