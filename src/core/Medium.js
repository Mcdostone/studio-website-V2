export default class Medium {

	constructor(id, src, comeFrom, likes, album, type, exif) {
		this.id = id;
		this.src = src.trim();
		this.from = comeFrom.toLowerCase().trim();
		this.likes = likes === undefined ? [] : likes;
		this.album = album;
		this.types = type || null;
		this.exif = exif;
	}

	countLikes() {
		return this.likes.length;
	}

	getThumbnail(size = 220) {
		if(this.from === 'drive')
			return this.src + '=s' + size;
		return this.src;
	}

	getExif() {
		return this.exif;
	}

}
