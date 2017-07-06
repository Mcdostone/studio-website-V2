export default class Type {

	constructor(id, name, media = []) {
		this.id = id;
		this.name = name;
		this.media = media;
	}

	countMedia() {
		if(this.media.length >= 1) {
			return `${this.media.length} ${this.media.length === 1 ? 'medium' : 'media'}`;
		}
		return undefined;
	}

}
