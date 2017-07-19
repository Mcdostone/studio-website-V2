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
		if(this.media.length >= 1) {
			return `${this.media.length} ${this.media.length === 1 ? 'medium' : 'media'}`;
		}
		return undefined;
	}

	getDate() {
		return moment(this.date, 'DD/MM/YYYY').format('DD/MM/YYYY');
	}

}
