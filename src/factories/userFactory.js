import { User } from '../core';

export const buildUserFromFirebase = (data) => {
	const user = new User(data.id, data.givenName, data.familyName, data.email, data.picture, data.banned, data.media);
	user.role = data.role;
	user.createdAt = data.created_at;
	user.updatedAt = data.updated_at;
	return user;
}

export const buildUserFromFirebaseAuth = (data) => {
	return new User(data.id, data.given_name, data.family_name, data.email, data.picture);
}
