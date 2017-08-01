import RestFirebase from './RestFirebase';

class RestFirebaseStorage extends RestFirebase {

	constructor() {
		super();
		this.get = this.get.bind(this);
		this.post = this.post.bind(this);
		this.delete = this.delete.bind(this);
	}

	get(resource, id) {
		return this.firebase.storage().ref().child(`${resource}/${id}`).getDownloadURL();
	}

	post(resource, data) {
		this.logger.storage(`POST ${resource}`);
		return this.firebase.storage().ref().child(resource).putString(data, 'data_url');
	}

	delete(resource, id) {
		return this.firebase.storage().ref().child(`${resource}/${id}`).delete();
	}

}

export default new RestFirebaseStorage();

