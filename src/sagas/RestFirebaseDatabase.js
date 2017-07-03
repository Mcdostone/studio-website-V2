import RestFirebase from './RestFirebase';


export default class RestFirebaseDatabase extends RestFirebase {

	get(resource, param) {
		const childPath = this.param === undefined ? `${resource}` : `${resource}/${param}`;
		return this.firebase.database().ref().child(childPath).once('value');
	}

}
