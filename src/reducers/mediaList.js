import { ADD_MEDIA, SORT_BY, FILTER_BY, SORT_LAST_ADDED } from '../actions/mediaListActions';

const initialState = {
		sortBy: SORT_LAST_ADDED,
		filterBy: 0,
		media: [],
		filters: ['all'],
};

export default function (state = initialState, action) {
	switch(action.type) {
		case SORT_BY:
			return Object.assign({}, state, {
				sortBy: action.payload
			});

		case FILTER_BY:
			return Object.assign({}, state, {
				filterBy: action.payload
			});

		case ADD_MEDIA:
			return Object.assign({}, state, {
				media: [...state.media, ...action.payload],
				filters: [...state.filters, ...action.payload.map(m => m.type)]
				.filter((v, i, a) => a.indexOf(v) === i)
				.sort()
      });

		default:
			return state;
			// eslint-disable-next-line
	};
}
