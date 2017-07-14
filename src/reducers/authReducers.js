import { LOGIN, LOGOUT } from '../actions/authActions';
import config from '../configuration';


const initialState = {
		authentificated: false,
		user: null,
};

export default function (state = initialState, action) {
  switch(action.type) {
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
