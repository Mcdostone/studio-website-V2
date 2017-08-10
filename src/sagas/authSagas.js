import { LOGIN, REQUEST_LOGIN, REQUEST_LOGOUT, LOGOUT } from '../actions/authActions';
import { updateUser } from '../actions/userActions';
import { closeDrawer } from '../actions/uiActions';
import { call, put, takeLatest } from 'redux-saga/effects';
import firebase from 'firebase';
import { buildUserFromFirebaseAuth } from '../factories';
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
	return firebase.auth().signOut();
}

function* requestLogin() {
	try {
		yield put(closeDrawer());
		const authData = yield call(signInWithPopup);
		const user = buildUserFromFirebaseAuth(authData.additionalUserInfo.profile);
		let userFirebase = yield call(restFirebaseDatabase.get, 'users', user.id);
		userFirebase = userFirebase.val();
		if(userFirebase !== null) {
			user.banned = userFirebase.banned;
			user.updatedAt = userFirebase.updated_at;
			user.role = userFirebase.role;
		}
		else
			user.updatedAt = new Date();
		user.createdAt = new Date();
		yield put(updateUser(user));
		if(user !== null)
			yield put({type: LOGIN, payload: {user, credential: authData.credential}});
  }
	catch(error) {
		console.log(error);
	}
}

function* requestLogout() {
	yield call(logout);
	yield put({type: LOGOUT});
	yield put(closeDrawer());
}

function* authSagas() {
	yield takeLatest(REQUEST_LOGIN, requestLogin);
	yield takeLatest(REQUEST_LOGOUT, requestLogout);
}

export default authSagas;
