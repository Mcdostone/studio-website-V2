import RestFirebase from './RestFirebase';

class RestFirebaseDatabase extends RestFirebase {

	constructor() {
		super();
		this.get = this.get.bind(this);
		this.post = this.post.bind(this);
		this.put = this.put.bind(this);
		this.delete = this.delete.bind(this);
		this.buildPath = this.buildPath.bind(this);
		this.generateId = this.generateId.bind(this);
	}

	buildPath(resource, id) {
		return id === undefined ? `${resource}` : `${resource}/${id}`;
	}

	get(resource, param) {
		const path = this.buildPath(resource, param);
		return this.firebase.database().ref(path).once('value');
	}

	put(resource, data) {
		if(data.id) {
			data.updatedAt = new Date();
			if(data.createdAt === null)
				data.createdAt = new Date();
			return new Promise((resolve, reject) => {
				this.firebase.database().ref(resource + '/' + data.id).update(data)
				.then(() => resolve(data))
				.catch(reject);
			});
		}
	}

	generateId(resource) {
		return this.firebase.database().ref().child(resource).push().key;
	}

	post(resource, data) {
		if(!data.id)
			data.id = this.generateId(resource);
		const path = this.buildPath(resource, data.id);
		const timestamp = new Date();
		data.createdAt = timestamp;
		data.updatedAt = timestamp;

		this.logger.database(`POST ${path}`);

		return new Promise((resolve, reject) => {
			this.firebase.database().ref(path).update(data)
			.then(() => resolve(data))
			.catch(reject)
		});
	}

	delete(resource, id) {
		return this.firebase.database().ref().child(this.buildPath(resource, id)).remove();
	}

}

export default new RestFirebaseDatabase();
