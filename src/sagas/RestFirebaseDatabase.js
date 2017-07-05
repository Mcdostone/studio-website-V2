import RestFirebase from './RestFirebase';


export default class RestFirebaseDatabase extends RestFirebase {

	constructor() {
		super();
		this.get = this.get.bind(this);
	}

	get(resource, param) {
		const childPath = param === undefined ? `${resource}` : `${resource}/${param}`;
		return this.firebase.database().ref().child(childPath).once('value');
	}

}
