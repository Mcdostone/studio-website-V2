export const COVERS_FETCH = 'COVERS_FETCH';
export const COVERS_ADD = 'COVERS_ADD';
export const COVERS_CREATE = 'COVERS_CREATE';
export const COVERS_DELETE = 'COVERS_DELETE';


export const fetchCover = (id) => ({
  type: COVERS_FETCH,
	payload: id
});

export const addCover = (id, cover) => ({
	type: COVERS_ADD,
	payload: {id, cover},
});

export const deleteCover = (id) => ({
	type: COVERS_DELETE,
	payload: id,
});

export const createCover = (id, data) => ({
		type: COVERS_CREATE,
		payload: {id, data}
});
