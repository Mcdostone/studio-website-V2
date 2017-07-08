export default class User {

	constructor(id, givenName, familyName, fullname, picture, updatedAt, media = []) {
		this.id = id;
		this.givenName = givenName;
		this.familyName = familyName;
		this.fullname = fullname;
		this.picture = picture;
		this.updatedAt = new Date(updatedAt);
		this.media = media;
	}

}
