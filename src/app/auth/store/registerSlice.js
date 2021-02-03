import { createSlice } from '@reduxjs/toolkit';
import { showMessage } from 'app/store/fuse/messageSlice';
import firebaseService from 'app/services/firebaseService';
import { auth, realDb } from '../../../@fake-db/db/firebase';
import jwtService from 'app/services/jwtService';
import { createUserSettingsFirebase, setUserData } from './userSlice';
import md5 from 'md5';

export const submitRegister = ({ displayName, password, email }) => async dispatch => {
	return jwtService
		.createUser({
			displayName,
			password,
			email
		})
		.then(user => {
			dispatch(setUserData(user));
			return dispatch(registerSuccess());
		})
		.catch(error => {
			return dispatch(registerError(error));
		});
};

export const registerWithFirebase = model => async dispatch => {
	if (!auth) {
		console.warn("Firebase Service didn't initialize, check your configuration");

		return () => false;
	}
	const { email, password, displayName, role, belongTo } = model;

	return auth
		.createUserWithEmailAndPassword(email, password)
		.then(response => {
			if (role === 'agency') {
				realDb.ref(`teams/${belongTo}/`).once('value', teamSnapshot => {
					let data = teamSnapshot.val();
					if (data) {
						if (data['teamAgent']) {
							data = { ...data, teamAgent: [...data.teamAgent, response.user.uid] };
						} else {
							data = { ...data, teamAgent: [response.user.uid] };
						}

						realDb.ref(`teams/${belongTo}/`).set({
							...data
						});
					}

					dispatch(
						createUserSettingsFirebase({
							...response.user,
							displayName,
							email,
							role,
							belongTo
						})
					);
				});
			} else {
				let data = {
					id: response.user.uid,
					teamOwner: response.user.uid,
					teamName: '',
					teamAgent: [],
					teamProducer: []
				};
				realDb.ref(`teams/${response.user.uid}/`).set({
					...data
				});
				dispatch(
					createUserSettingsFirebase({
						...response.user,
						displayName,
						email,
						role,
						belongTo
					})
				);
			}

			return dispatch(registerSuccess());
		})
		.catch(error => {
			const usernameErrorCodes = ['auth/operation-not-allowed', 'auth/user-not-found', 'auth/user-disabled'];

			const emailErrorCodes = ['auth/email-already-in-use', 'auth/invalid-email'];

			const passwordErrorCodes = ['auth/weak-password', 'auth/wrong-password'];

			const response = {
				email: emailErrorCodes.includes(error.code) ? error.message : null,
				displayName: usernameErrorCodes.includes(error.code) ? error.message : null,
				password: passwordErrorCodes.includes(error.code) ? error.message : null
			};

			if (error.code === 'auth/invalid-api-key') {
				dispatch(showMessage({ message: error.message }));
			}

			return dispatch(registerError(response));
		});
};

const initialState = {
	success: false,
	error: {
		username: null,
		password: null
	}
};

const registerSlice = createSlice({
	name: 'auth/register',
	initialState,
	reducers: {
		registerSuccess: (state, action) => {
			state.success = true;
		},
		registerError: (state, action) => {
			state.success = false;
			state.error = action.payload;
		}
	},
	extraReducers: {}
});

export const { registerSuccess, registerError } = registerSlice.actions;

export default registerSlice.reducer;
