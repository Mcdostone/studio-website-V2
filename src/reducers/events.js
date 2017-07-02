import { ADD_EVENTS } from '../actions/eventsActions';
import { getUniqueDatasetById } from '../utils';


const initialState = []

export default function (state = initialState, action) {
	switch(action.type) {
		case ADD_EVENTS:
			return getUniqueDatasetById([...state, ...action.payload]);

		default:
			return state;
			// eslint-disable-next-line
	};
}
