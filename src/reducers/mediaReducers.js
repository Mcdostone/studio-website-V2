import { MEDIA_ADD, MEDIA_ADD_LIST } from '../actions/mediaActions';
import { getUniqueDatasetById } from '../utils';


const initialState = {};

export default function (state = initialState, action) {
	switch(action.type) {
		case MEDIA_ADD:
			console.log(getUniqueDatasetById(action.payload));
			const newState = {};
			newState[action.payload.id] = action.payload;
			return Object.assign({}, state, newState);

		case MEDIA_ADD_LIST:
			const media =  getUniqueDatasetById(action.payload);
			return Object.assign({}, state, media);

		default:
			return state;
			// eslint-disable-next-line
	};
}
