export const ALBUMS_ADD = 'ALBUMS_ADD';
export const ALBUMS_CREATE = 'ALBUMS_CREATE';
export const ALBUMS_UPDATE = 'ALBUMS_UPDATE';
export const ALBUMS_FETCH = 'ALBUMS_FETCH';
export const ALBUMS_DELETE = 'ALBUMS_DELETE';


export const createAlbum = (album) => ({
	type: ALBUMS_CREATE,
	payload: album,
});

export const addAlbum = (album) => ({
	type: ALBUMS_ADD,
	payload: album,
});

export const updateAlbum = (album) => ({
	type: ALBUMS_UPDATE,
	payload: album,
});

export const deleteAlbum = (album) => ({
		type: ALBUMS_DELETE,
		payload: album,
});
