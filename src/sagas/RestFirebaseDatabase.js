import RestFirebase from './RestFirebase';

class RestFirebaseDatabase extends RestFirebase {

	constructor() {
		super();
		this.get = this.get.bind(this);
		this.post = this.post.bind(this);
		this.put = this.put.bind(this);
		this.delete = this.delete.bind(this);
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
		data.updatedAt = new Date();
		if(data.createdAt === null) {
			data.createdAt = new Date();
		}

		return new Promise((resolve, reject) => {
			this.firebase.database().ref(resource + '/' + data.id).update(data)
			.then(() => resolve({ response: data }))
			.catch(reject);
		});
	}

	post(resource, dataObject) {
		const key = this.firebase.database().ref().child(resource).push().key;
		dataObject.id = key;
		const timestamp = new Date();
		dataObject.createdAt = timestamp;
		// Why I can't write: dataObject.updatedAt = dataObject.createdAt -> return null
		dataObject.updatedAt = timestamp;
		return new Promise((resolve, reject) => {
			this.firebase.database().ref(this.buildPath(resource, key)).update(dataObject)
			.then(() => resolve({ responsee: dataObject }))
			.catch(reject)
		});
	}

	delete(resource, id) {
		return this.firebase.database().ref().child(this.buildPath(resource, id)).remove();
	}

}

export default new RestFirebaseDatabase();
