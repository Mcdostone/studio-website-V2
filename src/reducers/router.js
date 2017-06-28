import { REDIRECT_LOGIN } from '../actions/routerActions';


export default function (state, action) {
	switch(action.type) {
		case REDIRECT_LOGIN:
		default:
			return state;
	}
}
