import { LOGIN, REQUEST_LOGIN, REQUEST_LOGOUT, LOGOUT } from '../actions/authActions';
import { DRAWER_CLOSE } from '../actions/uiActions';
import { call, put, takeLatest } from 'redux-saga/effects';
import firebase from 'firebase';
import { firebaseStudio } from '../fire'
import restFirebaseDatabase from './RestFirebaseDatabase';
import config from '../configuration';

const authProvider = new firebase.auth.GoogleAuthProvider();
authProvider.setCustomParameters(config.FIREBASE_AUTH_CONFIG);
config.FIREBASE_AUTH_CONFIG.scopes.map(s => authProvider.addScope(s));

function signInWithPopup() {
	return firebaseStudio.auth().signInWithPopup(authProvider);
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
			{...authData.additionalUserInfo.profile, updatedAt: Date.now()},
			{credentials: authData.credential}
		);
		const userData = {
			user,
			authentificated: true
		};
		yield put({type: LOGIN, payload: userData});
		yield put({type: DRAWER_CLOSE});
		restFirebaseDatabase.put('users', user.id, user);
  }
	catch(error) {
		console.log(error);
	}
}

function* requestLogout() {
	yield call(logout);
	yield put({type: LOGOUT});
	yield put({type: DRAWER_CLOSE});
}

function* authSagas() {
	yield takeLatest(REQUEST_LOGIN, requestLogin);
	yield takeLatest(REQUEST_LOGOUT, requestLogout);
}

export default authSagas;
