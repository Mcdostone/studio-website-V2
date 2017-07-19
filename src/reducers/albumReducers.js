import { ALBUMS_ADD } from '../actions/albumActions';
import { Album } from '../core';
import { buildUniqueDatasetById } from '../utils';

const initialState = {}

function buildAlbum(e) {
	const album = new Album(e.id, e.title, e.date, e.media);
	album.createdAt = e.created_at;
	album.updatedAt = e.updated_at;
	return album;
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
