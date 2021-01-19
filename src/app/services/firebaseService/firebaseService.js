import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from './firebaseServiceConfig';
import {realDb, auth } from '../../../@fake-db/db/firebase'

class FirebaseService {
	init(success) {
		
		if (Object.entries(config).length === 0 && config.constructor === Object) {
			if (process.env.NODE_ENV === 'development') {
				
				console.warn(
					'Missing Firebase Configuration at src/app/services/firebaseService/firebaseServiceConfig.js'
				);
			}
			success(false);
			return;
		}
		

		if (!firebase.apps.length) {
			firebase.initializeApp(config);
		}
		
	
		this.db = realDb;
		this.auth = auth;
		success(true);
	}

	getUserData = userId => {
		console.log(firebase.apps.length)
		if (!firebase.apps.length) {
			return false;
		}
		
		return new Promise((resolve, reject) => {
			this.db
				.ref(`admins/${userId}`)
				.once('value')
				.then(snapshot => {
					const user = snapshot.val();					
					resolve(user);
				});
		});
	};

	updateUserData = user => {
		if (!firebase.apps.length) {
			return false;
		}
		console.log(user)
		localStorage.setItem("@UID", user.uid)
		return realDb.ref(`admins/${user.uid}`).set(user);
	};

	onAuthStateChanged = callback => {
		if (!auth) {
			return;
		}
		auth.onAuthStateChanged(callback);
	};

	signOut = () => {
		if (!auth) {
			return;
		}
		auth.signOut();
	};
}

const instance = new FirebaseService();

export default instance;
