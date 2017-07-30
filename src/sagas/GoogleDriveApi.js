import logger from '../Logger';


export default class GoogleDriveApi {

	constructor(gapi) {
		this.gapi = gapi;
		this.getFile = this.getFile.bind(this);
	}

	setAccessToken(accessToken) {
		this.gapi.auth.setToken({access_token: accessToken});
	}

	getFile(fileId) {
		if(this.gapi.client.drive !== undefined) {
			return this.gapi.client.drive.files.get({fileId})
				.then((response) => {return response.result})
				.then((result) => {return result});
		}
			else {
				logger.error('google drive API cannot be loaded !');
			}
		return undefined;
	}

}
