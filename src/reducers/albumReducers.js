import { ALBUMS_ADD } from '../actions/albumActions';
import { Album } from '../core';
import { buildUniqueDatasetById } from '../utils';

const initialState = {}

function buildAlbum(e) {
	return new Album(e.id, e.title, e.date, e.media);
}

export default function (state = initialState, action) {
	switch(action.type) {
		case ALBUMS_ADD:
			const albums = buildUniqueDatasetById(action.payload, buildAlbum);
			return Object.assign({}, state, albums);

		default:
			return state;
			// eslint-disable-next-line
	};
}
