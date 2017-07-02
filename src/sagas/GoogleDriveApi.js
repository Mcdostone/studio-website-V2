export default class GoogleDriveApi {

	constructor(gapi) {
		this.gapi = gapi;
		this.getFile = this.getFile.bind(this);
	}

	setAccessToken(accessToken) {
		this.gapi.auth.setToken({access_token: accessToken});
	}

	getFile(fileId) {
		return this.gapi.client.drive.files.get({fileId})
		.then((response) => {return response.result})
		.then((result) => {return result},
		(err) => console.log(err));
	}

}
