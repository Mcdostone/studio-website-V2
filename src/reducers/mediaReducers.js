import { MEDIA_ADD, MEDIA_ADD_LIST } from '../actions/mediaActions';
import { getUniqueDatasetById } from '../utils';


const initialState = {};

export default function (state = initialState, action) {
	switch(action.type) {
		case MEDIA_ADD:
		if(action.payload !== undefined) {
			const newMedium = {};
			newMedium[action.payload.id] = action.payload;
			const newMedia = Object.assign({}, state, newMedium);
			return Object.assign({}, state, newMedia);
		}
		return state;

		case MEDIA_ADD_LIST:
			const media =  getUniqueDatasetById(action.payload);
			return Object.assign({}, state, media);

		default:
			return state;
			// eslint-disable-next-line
	};
}
