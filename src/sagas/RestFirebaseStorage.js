import RestFirebase from './RestFirebase';


export default class RestFirebaseStorage extends RestFirebase {

	get(resource, param) {
		return this.firebase.storage().ref().child(`${resource}/${param}`).getDownloadURL();
	}

	post(resource, file) {
		console.log(resource, file);
		/*return this.firebase.storage().ref().child(`${resource}/${param}`).getDownloadURL();
		var storageRef = firebase.storage().ref();
		this.firebase.storage.ref(`${resource}/`).put(file).then(function(snapshot) {
  console.log('Uploaded a blob or file!');*/
	}
}
