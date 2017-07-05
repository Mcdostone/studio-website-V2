export default class Event {

	constructor(id, name, date, media = []) {
		this.id = id;
		this.name = name;
		this.date = date;
		this.media = media;
	}

}
