import { LOGIN, REQUEST_LOGIN, REQUEST_LOGOUT, LOGOUT } from '../actions/authActions';
import { call, put, takeLatest } from 'redux-saga/effects';
import firebase from 'firebase';
import { firebaseStudio } from '../fire'
import config from '../configuration';


const authProvider = new firebase.auth.GoogleAuthProvider();
authProvider.setCustomParameters(config.FIREBASE_AUTH_CONFIG);
config.FIREBASE_AUTH_CONFIG.scopes.map(s => authProvider.addScope(s));

function signInWithPopup() {
	return firebaseStudio.auth().signInWithPopup(authProvider)
	.then((res) => res)
	.catch(ex => {
		throw new Error('fucked up')
	});
}

function logout() {
	return firebase.auth().signOut()
	.catch(function(error) {
		throw new Error(error);
	});
}


function* requestLogin() {
	try {
		const authData = yield call(signInWithPopup);
		const user  = Object.assign({},
			{profile: authData.additionalUserInfo.profile},
			{credentials: authData.credential}
		);
		yield put({type: LOGIN, payload: user});
  }
	catch(error) {
		console.log(error);
	}
}

function* requestLogout() {
	yield call(logout);
	yield put({type: LOGOUT});
}

function* authSagas() {
	yield takeLatest(REQUEST_LOGIN, requestLogin);
	yield takeLatest(REQUEST_LOGOUT, requestLogout);
}

export default authSagas;