import firebase from 'firebase/app';
import ReduxSagaFirebase from 'redux-saga-firebase';
import config from './configuration';

export const firebaseStudio = firebase.initializeApp(config.FIREBASE_CONFIG);
export const fire = new ReduxSagaFirebase(firebaseStudio);

