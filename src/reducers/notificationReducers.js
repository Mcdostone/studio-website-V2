import { NOTIFICATIONS_SHOW, NOTIFICATIONS_HIDE } from '../actions/notificationActions';

const initialState = {
	message: '',
	open: false,
	autoHideDuration: 0
};

export default function (state = initialState, action) {
	switch(action.type) {
		case NOTIFICATIONS_SHOW:
			return Object.assign({}, { message: action.payload.message, open: true, autoHideDuration: action.payload.autoHideDuration});

		case NOTIFICATIONS_HIDE:
			return Object.assign({}, { open: false, message: ''	});

		default:
			return state;
			// eslint-disable-next-line
	};
}
