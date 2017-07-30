import RestFirebase from './RestFirebase';

class RestFirebaseStorage extends RestFirebase {

	constructor() {
		super();
		this.get = this.get.bind(this);
		this.post = this.post.bind(this);
	}

	get(resource, param) {
		return this.firebase.storage().ref().child(`${resource}/${param}`).getDownloadURL();
	}

	post(resource, data) {
		const ref = this.firebase.storage().ref(resource);
		this.logger.storage(`POST ${resource}`);
		return ref.putString(data, 'data_url');
	}
}

export default new RestFirebaseStorage();

