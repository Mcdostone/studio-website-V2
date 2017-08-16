export const TAGS_ADD = 'TAGS_ADD';
export const TAGS_CREATE = 'TAGS_CREATE';
export const TAGS_FETCH = 'TAGS_FETCH';
export const TAGS_DELETE = 'TAGS_DELETE';


export const createTag = (tag) => ({
	type: TAGS_CREATE,
	payload: tag,
});

export const addTag = (tag) => ({
	type: TAGS_ADD,
	payload: tag,
});

export const deleteTag = (tag) => ({
		type: TAGS_DELETE,
		payload: tag,
});
