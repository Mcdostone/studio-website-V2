import firebase from 'firebase';
import logger from '../Logger';

export default class RestFirebase {

	constructor() {
		this.firebase = firebase;
		this.logger = logger;
		this.get = this.get.bind(this);
	}

}
