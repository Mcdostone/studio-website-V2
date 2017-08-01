export const UPLOADS_ADD = 'UPLOADS_ADD';
export const UPLOADS_FETCH = 'UPLOADS_FETCH';
export const UPLOADS_CREATE = 'UPLOADS_CREATE';

export const addUpload = (upload) => ({
	type: UPLOADS_ADD,
	payload: upload,
});

export const createUpload = (upload) => ({
	type: UPLOADS_CREATE,
	payload: upload,
});
