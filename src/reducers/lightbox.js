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
			return Object.assign({}, state, {
        lightboxOpened: true,
				currentMedium: action.payload
      });

		case LIGHTBOX_PREVIOUS:
			return Object.assign({}, state, {
        lightboxOpened: true,
				currentMedium: action.payload
      });

		default:
			return state;
	}
}
