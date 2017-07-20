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
	user.createdAt = u.created_at;
	user.updatedAt = u.updated_at;
	return user;
}

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
		const user = buildUser(authData.additionalUserInfo.profile);
		const userFromFirebase = yield call(restFirebaseDatabase.get, 'users', user.id);
		if(userFromFirebase.val() !== null) {
				user.banned = userFromFirebase.val().banned;
		}
		const userData = {
			user,
			authentificated: true
		};
		yield put({type: LOGIN, payload: userData});
		yield put({type: DRAWER_CLOSE});
		yield put({type: CRUD_UPDATE, payload: {resource: 'users', data: user}});
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
