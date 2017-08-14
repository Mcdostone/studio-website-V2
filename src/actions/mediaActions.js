export const MEDIA_ADD = 'MEDIA_ADD';
export const MEDIA_CREATE = 'MEDIA_CREATE';
export const MEDIA_UPDATE = 'MEDIA_UPDATE';
export const MEDIA_FETCH_ONE = 'MEDIA_FETCH_ONE';
export const MEDIA_FETCH_ALL = 'MEDIA_FETCH_ALL';
export const MEDIA_DELETE = 'MEDIA_DELETE';
export const MEDIA_LIKE = 'MEDIA_LIKE';


export const createMedium = (medium) => ({
	type: MEDIA_CREATE,
	payload: medium,
});

export const addMedium = (medium) => ({
	type: MEDIA_ADD,
	payload: medium,
});

export const updateMedium = (medium) => ({
	type: MEDIA_UPDATE,
	payload: medium,
});

export const deleteMedium = (medium) => ({
	type: MEDIA_DELETE,
	payload: medium,
});

export const fetchMedium = (resource, id) => ({
	type: MEDIA_FETCH_ONE,
	payload: {resource, id}
});

export const fetchAllMedia = (resource = 'media') => ({
	type: MEDIA_FETCH_ALL,
	payload: { resource }
});

export const likeMedium = (medium, user) => ({
	type: MEDIA_LIKE,
	payload: { medium, user }
});
