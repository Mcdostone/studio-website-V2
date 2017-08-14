export default class Medium {

	constructor(id, src, comeFrom, likes, album, type = null, exif = null) {
		this.id = id;
		this.src = src ? src.trim() : null;
		this.from = comeFrom.toLowerCase().trim() || null;
		this.likes = likes || {};
		this.album = album;
		this.type = type;
		this.visible = true;
		this.exif = exif;
	}

	countLikes() {
		return this.likes.length || 0;
	}

	like(userId) {
		if(this.likes[userId] === true)
			delete this.likes[userId];
		else
			this.likes[userId] = true;
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
