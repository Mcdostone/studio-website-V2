import defaultCover from './assets/default-cover.jpg';

export default {
	FIREBASE_CONFIG: {
		apiKey: 'AIzaSyCMsbyrvksMD_-vBXmbEIVeF17LTnBjBRk',
		authDomain: 'stdio-4d434.firebaseapp.com',
		databaseURL: 'https://stdio-4d434.firebaseio.com',
		projectId: 'stdio-4d434',
		storageBucket: 'stdio-4d434.appspot.com',
		messagingSenderId: '813777068579'
	},
	FIREBASE_AUTH_CONFIG: {
		scopes: ['email', 'profile', 'https://www.googleapis.com/auth/drive.readonly'],
		hd: 'telecomnancy.net',
		prompt: 'select_account',
	},
	APP: {
		DEFAULT_COVER: defaultCover,
		LOCAL_STORAGE_KEY: 'tn.net:studio'
	}

}
