import moment from 'moment';


export default class Album {

	constructor(id, title, date, media = {}) {
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
