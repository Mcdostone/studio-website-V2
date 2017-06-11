import { USER_LOGIN, USER_LOGOUT } from '../actions/authActions';


const initialState = {
		authentificated: false,
		user: null,
};

export default function (state = initialState, action) {
  switch(action.type) {
		case USER_LOGIN:
			return Object.assign({}, state, {
        user: action.payload,
				authentificated: true
      });
		case USER_LOGOUT:
			return Object.assign({}, state, initialState);
		default:
			return state;
	}
}
