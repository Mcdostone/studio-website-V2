import {
	COVER_ADD,
	COVER_SET_TITLE, COVER_NEW } from '../actions/coverActions';
import config from '../configuration';

const initialState = {
	current: undefined,
	title: undefined
};

export default function (state = initialState, action) {
	const newState = {};
  switch(action.type) {
		case COVER_ADD:
			newState[action.payload.page] = action.payload.url ? action.payload.url : config.UI.DEFAULT_COVER;
			return Object.assign({}, state, newState);

		case COVER_SET_TITLE:
			return Object.assign({}, state, {title: action.payload});

		case COVER_NEW:
		console.log(action);
			return Object.assign({}, state, {current: state[action.payload]});

		default:
			return state;
	}
}
