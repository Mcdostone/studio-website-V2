class Timestampable {

	constructor() {
		this.updated_at = null;
		this.created_at = null;
	}

	set createdAt(date) {
		this.created_at = date === undefined ? null : date;
	}

	get createdAt() {
		return this.created_at;
	}

	set updatedAt(date) {
		this.updated_at = date === undefined ? null : date;
	}

	get updatedAt() {
		return this.updated_at;
	}

}

export default Timestampable;
