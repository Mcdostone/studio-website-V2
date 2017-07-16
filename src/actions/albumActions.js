export const ALBUMS_ADD = 'ALBUMS_ADD';
export const ALBUMS_FETCH = 'ALBUMS_FETCH';

export const addAlbums = (albums) => ({
		type: ALBUMS_ADD,
		payload: albums,
});
