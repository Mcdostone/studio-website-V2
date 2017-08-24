export const MEDIA_ADD = 'MEDIA_ADD';
export const MEDIA_ADD_WITH_SRC = 'MEDIA_ADD_WITH_SRC';
export const MEDIA_CREATE = 'MEDIA_CREATE';
export const MEDIA_UPDATE = 'MEDIA_UPDATE';
export const MEDIA_FETCH_ONE = 'MEDIA_FETCH_ONE';
export const MEDIA_DELETE = 'MEDIA_DELETE';
export const MEDIA_LIKE = 'MEDIA_LIKE';
export const MEDIA_TAG = 'MEDIA_TAG';


export const createMedium = (medium) => ({
	type: MEDIA_CREATE,
	payload: medium,
});

export const addMedium = (medium) => ({
	type: MEDIA_ADD,
	payload: medium,
});

export const addMediumWithSrc = (medium) => ({
	type: MEDIA_ADD_WITH_SRC,
	payload: medium,
});

export const tagMedium = (medium, tag) => ({
	type: MEDIA_TAG,
	payload: { medium, tag },
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

export const likeMedium = (medium, user) => ({
	type: MEDIA_LIKE,
	payload: { medium, user }
});
