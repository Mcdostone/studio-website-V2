import { MEDIA_ADD, MEDIA_DELETE } from '../actions/mediaActions';
import { getById } from '../utils';

const initialState = {};

export default function (state = initialState, action) {
	switch(action.type) {
		case MEDIA_ADD:
			return Object.assign({}, state, getById(action.payload));

			case MEDIA_DELETE:
			const newState = state;
			delete newState[action.payload.id];
			return Object.assign({}, newState);

		default:
			return state;
			// eslint-disable-next-line
	};
}
