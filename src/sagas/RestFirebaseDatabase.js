import RestFirebase from './RestFirebase';

class RestFirebaseDatabase extends RestFirebase {

	constructor() {
		super();
		this.get = this.get.bind(this);
		this.post = this.post.bind(this);
		this.put = this.put.bind(this);
		this.buildPath = this.buildPath.bind(this);
	}

	buildPath(resource, param) {
		return param === undefined ? `${resource}` : `${resource}/${param}`;
	}

	get(resource, param) {
		const path = this.buildPath(resource, param);
		return this.firebase.database().ref().child(path).once('value');
	}

	put(resource, data) {
		return this.firebase.database().ref(resource + '/' + data.id).update(data)
	}

	post(resource, param, dataObject) {
		const path = this.buildPath(resource, param);
		this.firebase.database().ref(path).update(dataObject)
		.then(response => ({ response }))
    .catch(error => ({ error }));
	}

}

export default new RestFirebaseDatabase();
