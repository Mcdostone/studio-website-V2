import defaultCover from '../assets/default-cover.jpg';

export default class Event {

	constructor(id, name, date, cover = undefined) {
		this.id = id;
		this.name = name;
		this.date = date;
		this.cover = cover ? cover : defaultCover;
	}

}
