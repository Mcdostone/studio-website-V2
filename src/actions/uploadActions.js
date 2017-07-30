export const UPLOADS_ADD = 'UPLOADS_ADD';
export const UPLOADS_FETCH = 'UPLOADS_FETCH';
export const UPLOADS_CREATE = 'UPLOADS_CREATE';

export const addUploads = (uploads) => ({
		type: UPLOADS_ADD,
		payload: uploads,
});


export const createUpload = (resource, data) => ({
		type: UPLOADS_CREATE,
		payload: {resource, data},
});
