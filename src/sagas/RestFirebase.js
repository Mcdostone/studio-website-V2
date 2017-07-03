import firebase from 'firebase';

export default class RestFirebase {

	constructor() {
		this.firebase = firebase;
		this.get = this.get.bind(this);
	}

	get() {
		throw new Error('cannot instantiate, need to implement');
	}

}
