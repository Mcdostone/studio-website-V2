import { Upload } from '../core';

export const buildUploadFromFirebase = (data) => {
	const upload = new Upload(data.id, data.author, data.media)
	upload.createdAt = data.created_at;
	upload.updatedAt = data.updated_at;
	return upload;
}

export const buildUpload = () => new Upload(undefined, null, {});
