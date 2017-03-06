import firebase from 'firebase';
import config from '../config/env/development';

firebase.initializeApp(config.firebase.creds);

export default firebase.database();
export const firebaseAuth = firebase.auth();