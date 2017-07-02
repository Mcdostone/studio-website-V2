export default class Medium {

	constructor(src, type, from = 'drive', likes = []) {
		this.src = src.trim();
		this.type = type.toLowerCase().trim();
		this.from = from.toLowerCase().trim();
		this.likes = likes;
	}

}
