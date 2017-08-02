export const MEDIA_ADD = 'MEDIA_ADD';
export const MEDIA_CREATE = 'MEDIA_CREATE';
export const MEDIA_UPDATE = 'MEDIA_UPDATE';
export const MEDIA_FETCH_ONE = 'MEDIA_FETCH_ONE';
export const MEDIA_DELETE = 'MEDIA_DELETE';


export const createMedium = (medium) => ({
	type: MEDIA_CREATE,
	payload: medium,
});

export const addMedium = (medium) => ({
	type: MEDIA_ADD,
	payload: medium,
});

export const updateMedia = (medium) => ({
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

