export const COVERS_FETCH = 'COVERS_FETCH';
export const COVERS_FETCH_ALL = 'COVERS_FETCH_ALL';
export const COVERS_ADD = 'COVERS_ADD';
export const COVERS_UPDATE = 'COVERS_UPDATE';
export const COVERS_CREATE = 'COVERS_CREATE';
export const COVERS_DELETE = 'COVERS_DELETE';


export const fetchAllCovers = () => ({
	type: COVERS_FETCH_ALL,
	payload: {resource: 'covers'}
});

export const fetchCover = (resource, id, coverResource) => ({
  type: COVERS_FETCH,
	payload: {resource, id, coverResource}
});

export const addCover = (id, cover, coverResource) => ({
	type: COVERS_ADD,
	payload: {id, cover, coverResource},
});

export const updateCover = (data) => ({
	type: COVERS_UPDATE,
	payload: data,
});

export const deleteCover = (id) => ({
	type: COVERS_DELETE,
	payload: id,
});

export const createCover = (id, data) => ({
		type: COVERS_CREATE,
		payload: {id, data}
});
