import { Tag } from '../core';

export const buildTagFromFirebase = (data) => {
	const tag =  new Tag(data.id, data.tag, data.author);
	tag.createdAt = data.created_at;
	tag.updatedAt = data.updated_at;
	return tag;
}

export const buildTag = () => {
	return new Tag();
}
