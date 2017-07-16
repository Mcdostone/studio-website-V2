export default class User {

	constructor(id, givenName, familyName, picture, updatedAt, banned, media = []) {
		this.id = id;
		this.givenName = givenName;
		this.familyName = familyName;
		this.picture = picture;
		this.updatedAt = new Date(updatedAt);
		this.banned = banned;
		this.media = media;
	}

	getFullName() {
		return `${this.givenName} ${this.familyName}`;
	}

}
