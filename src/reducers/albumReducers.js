import { ALBUMS_ADD } from '../actions/albumActions';
import { getUniqueDatasetById } from '../utils';

const initialState = {};

export default function (state = initialState, action) {
	switch(action.type) {
		case ALBUMS_ADD:
			return Object.assign({}, state, getUniqueDatasetById(action.payload));

		default:
			return state;
			// eslint-disable-next-line
	};
}
