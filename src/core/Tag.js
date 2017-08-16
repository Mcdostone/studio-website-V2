import Timestampable from './Timestampable';

export default class Tag extends Timestampable {

	constructor(id, tag, author) {
		super();
		this.id = id;
		this.tag = tag;
		this.author = author;
	}

}
