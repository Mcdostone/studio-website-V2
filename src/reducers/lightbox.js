import { LIGHTBOX_CLOSE, LIGHTBOX_OPEN, SHOW_MEDIUM } from '../actions/lightboxActions';

const initialState = {
		medium: null,
		lightboxOpened: false,
};

export default function (state = initialState, action) {
	switch(action.type) {
		case SHOW_MEDIUM:
			return Object.assign({}, state, {
				medium: action.payload,
				lightboxOpened: true,
      });

		case LIGHTBOX_CLOSE:
			return Object.assign({}, state, {
        lightboxOpened: false
      });

		case LIGHTBOX_OPEN:
			return Object.assign({}, state, {
        lightboxOpened: true,
				currentMedium: action.payload
      });

		default:
			return state;
	}
}
