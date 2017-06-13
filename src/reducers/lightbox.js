import { ADD_MEDIA, LIGHTBOX_CLOSE, LIGHTBOX_OPEN, SHOW_MEDIUM } from '../actions/lightboxActions';

const initialState = {
		medium: null,
		lightboxOpened: false,
		media: []
};

export default function (state = initialState, action) {
	switch(action.type) {
		case ADD_MEDIA:
			return Object.assign({}, state, {
				media: [...state.media, ...action.payload]
      });
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
