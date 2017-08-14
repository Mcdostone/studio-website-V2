import { Cover } from '../core';

export const buildCoverFromFirebase = (data) => {
	return new Cover(data.id, data.cover, data.coverResource);
}

export const buildCover = (id) => {
	return new Cover(id, null, null);
}
