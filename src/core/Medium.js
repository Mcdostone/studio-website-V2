export default class Medium {

	constructor(id, src, type, from = 'drive', likes = []) {
		this.id = id;
		this.src = src.trim();
		this.type = type.toLowerCase().trim();
		this.from = from.toLowerCase().trim();
		this.likes = likes;
	}

	countLikes() {
		return this.likes.length;
	}

}
