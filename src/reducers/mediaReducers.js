import { MEDIA_ADD } from '../actions/mediaActions';

const initialState = {
};

export default function (state = initialState, action) {
	switch(action.type) {
		case MEDIA_ADD:
			const newMedium = {};
			newMedium[action.payload.id] = action.payload;
			const newMedia = Object.assign({}, state, newMedium);
			return Object.assign({}, state, newMedia);
		default:
			return state;
			// eslint-disable-next-line
	};
}
