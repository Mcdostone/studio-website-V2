import Timestampable from './Timestampable';

export const READER = 0;
export const AUTHOR = 1;
export const ADMIN = 2;

export default class User extends Timestampable {

	constructor(id, givenName, familyName, email, picture, banned, media = []) {
		super();
		this.id = id;
		this.givenName = givenName;
		this.familyName = familyName.toUpperCase();
		this.email = email;
		this.picture = picture;
		this.banned = banned || false;
		this.media = media;
		this.role = 0;
	}

	getFullName() {
		return`${this.givenName} ${this.familyName}`;
	}

	isAdmin() {
		return this.role === ADMIN;
	}

	isAuthor() {
		return this.role === AUTHOR;
	}

	isReader() {
		return this.role === READER;
	}

	getRoleName() {
		switch(this.role) {
			case ADMIN:
				return 'Admin';
			case AUTHOR:
				return 'Author';
			default:
				return 'Reader';
		}
	}

}
