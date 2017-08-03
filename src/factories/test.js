import { Album } from '../core';

export const buildAlbumFromFirebase = (data) => {
	const album = new Album(data.id, data.title, data.date, data.media);
	album.createdAt = data.created_at;
	album.updatedAt = data.updated_at;
	return album;
}

export const buildAlbum = (data) => new Album(undefined, '', new Date(), []);
