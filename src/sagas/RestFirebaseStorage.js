import RestFirebase from './RestFirebase';


export default class RestFirebaseStorage extends RestFirebase {

	get(resource, param) {
		return this.firebase.storage().ref().child(`${resource}/${param}`).getDownloadURL();
	}

}
