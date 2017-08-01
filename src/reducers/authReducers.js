import moment from 'moment';
import { LOGIN, LOGOUT, LOGIN_FROM_SESSION_STORAGE } from '../actions/authActions';
import { buildUserFromFirebase } from '../factories';
import config from '../configuration';

const initialState = {
		authentificated: false,
		credential: null,
		user: null,
		expireAt: null,
};

export default function (state = initialState, action) {
	switch(action.type) {
		case LOGIN_FROM_SESSION_STORAGE:
			const userStorageData = JSON.parse(sessionStorage.getItem(config.APP.LOCAL_STORAGE_KEY));
			if(userStorageData !== null) {
				const {authentificated, user, credential, expireAt} = userStorageData;
				if(moment(expireAt).isBefore(moment())) {
					sessionStorage.removeItem(config.APP.LOCAL_STORAGE_KEY);
					return state;
				}
				else
					return Object.assign({}, state, {authentificated, user: buildUserFromFirebase(user), credential, expireAt: moment(expireAt)});
			}
			return state;

		case LOGIN:
			const newState = {
				authentificated: true,
				user: action.payload.user,
				credential: action.payload.credential,
				expireAt: moment().add(30, 'm'),
			};
			sessionStorage.removeItem(config.APP.LOCAL_STORAGE_KEY);
			sessionStorage.setItem(config.APP.LOCAL_STORAGE_KEY , JSON.stringify(newState));
			return Object.assign({}, state, newState);

		case LOGOUT:
			sessionStorage.removeItem(config.APP.LOCAL_STORAGE_KEY);
			return Object.assign({}, state, initialState);

		default:
			return state;
	}
}
