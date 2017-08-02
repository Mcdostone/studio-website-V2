import { MEDIA_ADD } from '../actions/mediaActions';
import { getById } from '../utils';

const initialState = {};

export default function (state = initialState, action) {
	switch(action.type) {
		case MEDIA_ADD:
			return Object.assign({}, state, getById(action.payload));

		default:
			return state;
			// eslint-disable-next-line
	};
}
