import { ADD_MEDIA,
	SORT_BY,
	FILTER_BY,
	SORT_LAST_ADDED,
	SORT_POPULARITY,
	SORT_LIKES } from '../actions/mediaListActions';

const initialState = {
		sortBy: SORT_LAST_ADDED,
		filterBy: 0,
		media: [],
		processedMedia: [],
		filters: ['All'],
};

function getProcessedMedia(media, filter, sort) {
	let copy = [...media];

	if(filter.toLowerCase() !== 'all' ) {
		copy = media.filter(medium => medium.type.toLowerCase().trim() === filter.toLowerCase().trim());
	}

	switch(sort) {
		case SORT_LIKES:
			return copy.sort((a, b) => (b.likes > a.likes) ? 1 : ((a.likes > b.likes) ? -1 : 0));
		case SORT_LAST_ADDED:
			return copy;
		case SORT_POPULARITY:;
			return copy;
		default:
			return copy;
	}
}

export default function (state = initialState, action) {
	switch(action.type) {
		case SORT_BY:
			return Object.assign({}, state, {
				sortBy: action.payload,
				processedMedia: getProcessedMedia(state.media, state.filters[state.filterBy], action.payload)
			});

		case FILTER_BY:
			return Object.assign({}, state, {
				filterBy: action.payload,
				processedMedia: getProcessedMedia(state.media, state.filters[action.payload], state.sortBy)
			});

		case ADD_MEDIA:
			const newMedia = [...new Set([...state.media, ...action.payload])];
			return Object.assign({}, state, {
				media: newMedia,
				filters: [...new Set([...state.filters, ...action.payload.map(m => m.type)])]
				.map((v) => v.charAt(0).toUpperCase() + v.slice(1))
				.sort(),
				processedMedia: getProcessedMedia(newMedia, state.filters[state.filterBy], state.sortBy)
      });

		default:
			return state;
			// eslint-disable-next-line
	};
}
