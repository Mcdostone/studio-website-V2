import { LIGHTBOX_CLOSE,
	SHOW_MEDIUM,
	LIGHTBOX_NEXT,
	LIGHTBOX_PREVIOUS, } from '../actions/lightboxActions';

const initialState = {
		medium: null,
		lightboxOpened: false,
		index: 0
};

export default function (state = initialState, action, root) {
	switch(action.type) {
		case SHOW_MEDIUM:
			return Object.assign({}, state, {
				medium: action.payload.medium,
				index: action.payload.index,
				lightboxOpened: true,
      });

		case LIGHTBOX_CLOSE:
			return Object.assign({}, state, {
        lightboxOpened: false
      });

		case LIGHTBOX_NEXT:
			const newIndex = (state.index + 1) % action.payload.length;
			return Object.assign({}, state, {
        lightboxOpened: true,
				medium: action.payload[newIndex],
				index: newIndex,
      });

		case LIGHTBOX_PREVIOUS:
			const i = (state.index + action.payload.length - 1) % action.payload.length;
			return Object.assign({}, state, {
        lightboxOpened: true,
				medium: action.payload[i],
				index: i,
      });

		default:
			return state;
	}
}
