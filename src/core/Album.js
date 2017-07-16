import moment from 'moment';


export default class Album {

	constructor(id, name, date, media = {}) {
		this.id = id;
		this.name = name;
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