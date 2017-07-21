import { LOGIN, REQUEST_LOGIN, REQUEST_LOGOUT, LOGOUT } from '../actions/authActions';
import { CRUD_UPDATE } from '../actions/crudActions';
import { DRAWER_CLOSE } from '../actions/uiActions';
import { call, put, takeLatest } from 'redux-saga/effects';
import firebase from 'firebase';
import { firebaseStudio } from '../fire'
import { User } from '../core';
import restFirebaseDatabase from './RestFirebaseDatabase';
import config from '../configuration';

const authProvider = new firebase.auth.GoogleAuthProvider();
authProvider.setCustomParameters(config.FIREBASE_AUTH_CONFIG);
config.FIREBASE_AUTH_CONFIG.scopes.map(s => authProvider.addScope(s));

function buildUser(u) {
	const user = new User(u.id,
	u.given_name,
	u.family_name,
	u.email,
	u.picture,
	false,
	Object.keys(u.media || {}));
	return user;
}

function signInWithPopup() {
	return firebaseStudio.auth().signInWithPopup(authProvider);
}

function logout() {
	return firebase.auth().signOut();
}

function* requestLogin() {
	try {
		const authData = yield call(signInWithPopup);
		const user = buildUser(authData.additionalUserInfo.profile);
		const data = yield call(restFirebaseDatabase.get, 'users', user.id);
		const userFirebase = data.val();
		if(userFirebase !== null) {
			user.banned = userFirebase.banned;
			user.createdAt = userFirebase.created_at;
			user.updatedAt = userFirebase.updated_at;
		}
		yield put({type: DRAWER_CLOSE});
		yield put({type: CRUD_UPDATE, payload: {resource: 'users', data: user}});
		if(userFirebase !== null)
			user.credential = authData.credential;
		yield put({type: LOGIN, payload: user});
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
