import { Cover } from '../core';

export const buildCoverFromFirebase = (data) => {
	return new Cover(data.id, data.cover);
}
