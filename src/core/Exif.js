export default class Exif {

	constructor() {
		this.valid = false;
	}

	addMetadata(metadata, value) {
		if(value !== undefined) {
			this[metadata] = value;
			this.valid = true;
		}
	}

	containsMetadata() {
		return this.valid;
	}

}
