import Timestampable from './Timestampable';

export default class Upload extends Timestampable {

	constructor(id, author, media) {
		super();
		this.id = id;
		this.author = author;
		this.media = media || [];
	}

	countMedia() {
		return Object.keys(this.media).length;
	}

}
