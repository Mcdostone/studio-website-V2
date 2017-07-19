import Timestampable from './Timestampable';


export default class User extends Timestampable {

	constructor(id, givenName, familyName, email, picture, banned, media = []) {
		super();
		this.id = id;
		this.givenName = givenName;
		this.familyName = familyName;
		this.email = email;
		this.picture = picture;
		this.banned = banned;
		this.media = media;
	}

	getFullName() {
		return `${this.givenName} ${this.familyName}`;
	}

}
