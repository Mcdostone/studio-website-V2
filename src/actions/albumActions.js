export const ALBUMS_ADD = 'ALBUMS_ADD';
export const ALBUMS_FETCH = 'ALBUMS_FETCH';
export const ALBUMS_DELETE = 'ALBUMS_DELETE';

export const addAlbums = (albums) => ({
		type: ALBUMS_ADD,
		payload: albums,
});

export const deleteAlbum = (id) => ({
		type: ALBUMS_DELETE,
		payload: id,
});
