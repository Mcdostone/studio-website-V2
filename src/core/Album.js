import moment from 'moment';
import Timestampable from './Timestampable';

export default class Album extends Timestampable {

	constructor(id, title, date = new Date(), media = {}) {
		super();
		this.id = id;
		this.title = title;
		this.date = date;
		this.media = media;
	}

	countMedia() {
		return Object.keys(this.media).length;
	}

	getDate() {
		return moment.utc(this.date).local().format('DD/MM/YYYY');
	}

	addMedium(medium) {
		this.media[medium.id] = true;
	}

}
