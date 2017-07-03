import { COVER_ADD, COVER_SET_CURRENT } from '../actions/coverActions';
import config from '../configuration';

const initialState = {
	current: null,
};

export default function (state = initialState, action) {
	const newState = {};
  switch(action.type) {
		case COVER_ADD:
			newState[action.payload.page] = action.payload.url ? action.payload.url : config.UI.DEFAULT_COVER;
			return Object.assign({}, state, newState);

		case COVER_SET_CURRENT:
			return Object.assign({}, state, {current: state[action.payload]});

		default:
			return state;
	}
}
