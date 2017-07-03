import { ADD_TYPES } from '../actions/typesActions';
import { getUniqueDatasetById } from '../utils';


const initialState = []

export default function (state = initialState, action) {
	switch(action.type) {
		case ADD_TYPES:
			return getUniqueDatasetById([...state, ...action.payload]);

		default:
			return state;
			// eslint-disable-next-line
	};
}
