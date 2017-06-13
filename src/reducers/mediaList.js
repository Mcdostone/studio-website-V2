import { SORT_BY, SORT_LAST_ADDED } from '../actions/mediaListActions';

const initialState = {
		sortBy: SORT_LAST_ADDED,
};

export default function (state = initialState, action) {
	switch(action.type) {
		case SORT_BY:
			return Object.assign({}, state, {
				sortBy: action.payload
			});
		default:
			return state;
			// eslint-disable-next-line
	};
}
