export const UPLOADS_ADD = 'UPLOADS_ADD';
export const UPLOADS_FETCH = 'UPLOADS_FETCH';

export const addUploads = (uploads) => ({
		type: UPLOADS_ADD,
		payload: uploads,
});
