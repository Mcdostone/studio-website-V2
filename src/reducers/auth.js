import { LOGIN, LOGOUT } from '../actions/authActions';


const initialState = {
		authentificated: false,
		user: null,
};

export default function (state = initialState, action) {
  switch(action.type) {
		case LOGIN:
			return Object.assign({}, state, {
        user: action.payload,
				authentificated: true
      });

		case LOGOUT:
			return Object.assign({}, state, initialState);

		default:
			return state;
	}
}
