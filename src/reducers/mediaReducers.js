import { MEDIA_ADD } from '../actions/mediaActions';

const initialState = {
		media: {},
		filters: ['All'],
};

export default function (state = initialState, action) {
	switch(action.type) {
		case MEDIA_ADD:
			const newMedium = {};
			newMedium[action.payload.id] = action.payload;
			const newMedia = Object.assign({}, state.media, newMedium);
			return Object.assign({}, state, {
				media: newMedia,
      });
		default:
			return state;
			// eslint-disable-next-line
	};
}
