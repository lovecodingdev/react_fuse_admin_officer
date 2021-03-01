import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { realDb } from '../../../../../@fake-db/db/firebase';
import {
	firebaseFuncitonSendEmailEndpoint,
	deployOfficerEndpoint,
	deployProducerEndpoint
} from 'app/fuse-configs/endpointConfig';

export const getUsers = createAsyncThunk(
	'users/users/getUsers',
	() =>
		new Promise((resolve, reject) => {
			var belongTo = localStorage.getItem('@BELONGTO');
			var starCountRef = realDb.ref(`users/`);
			var agencyCountRef = realDb.ref(`agency/`);
			var users = [];
			starCountRef.on('value', snapshot => {
				const data = snapshot.val();

				if (data) {
					Object.keys(data).map(item => {
						if (belongTo === data[item].belongTo) users.push(data[item]);
					});
				}

				agencyCountRef.on('value', snap => {
					const agencyData = snap.val();
					if (agencyData) {
						Object.keys(agencyData).map(item => {
							if (belongTo === agencyData[item].belongTo) users.push(agencyData[item]);
						});
					}
					resolve(users);
				});
			});
		})
);

export const saveProduct = createAsyncThunk('users/users/saveUser', async (product, { dispatch, getState }) => {
	const response = await axios.post('/api/users/save', product);
	const data = await response.data;
	dispatch(getUsers());
	return data;
});

export const removeProducts = createAsyncThunk('users/users/removeUser', async (productIds, { dispatch, getState }) => {
	const response = await axios.post('/api/users/remove-users', { productIds });
	const data = await response.data;
	const uid = localStorage.getItem('@UID');
	productIds.map(item => {
		var starCountRef = realDb.ref(`Users/`);
		starCountRef.remove();
	});

	dispatch(getUsers());

	return data;
});

export const addUser = createAsyncThunk('users/user/addUser', async (contact, { dispatch, getState }) => {
	if (contact.role === 'agency') {
		var form = {
			email: contact.email,
			subject: 'Sent Invitation',
			emailBody:
				'Please touch this link to register to Back Office Web App as Agency \t ' +
				deployOfficerEndpoint +
				'/register/' +
				contact.belongTo +
				'/pdElqKJexpOGk3s31VWMVTbQAgvmBRAyYLtt3KTJhEhRQ8YfMZIa6TU29SURp4NVDvttUuL6t0qjpwMSu2fp4h2LgpTMupdEoP8bGxGeOkMJ3Yg3X51GWHpxvWkdjiMw5PyvWqJQXsaXfeysGSA05l'
		};
	} else {
		var form = {
			email: contact.email,
			subject: 'Sent Invitation',
			emailBody:
				'Please touch this link to register to Back Office Web App as Producer \t ' +
				deployProducerEndpoint +
				'/register/' +
				contact.belongTo
		};
	}

	const response = await axios.post(firebaseFuncitonSendEmailEndpoint, form);
	console.log(response);
	const data = await response.data;

	dispatch(getUsers());

	return data;
});

const productsAdapter = createEntityAdapter({});

export const { selectAll: selectUsers, selectById: selectUserById } = productsAdapter.getSelectors(
	state => state.users.users
);

const productsSlice = createSlice({
	name: 'users/users',
	initialState: productsAdapter.getInitialState({
		searchText: '',
		addUserDialog: {
			type: 'new',
			props: {
				open: false
			},
			data: null
		},
		userProfileDialog: {
			type: 'edit',
			props: {
				open: false
			},
			data: null
		}
	}),

	reducers: {
		setProductsSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		},
		openUserDialog: (state, action) => {
			state.addUserDialog = {
				type: 'new',
				props: {
					open: true
				},
				data: action.payload
			};
		},
		closeUserDialog: (state, action) => {
			state.addUserDialog = {
				type: 'new',
				props: {
					open: false
				},
				data: null
			};
		},
		openUserProfileDialog: (state, action) => {
			state.userProfileDialog = {
				type: 'edit',
				props: {
					open: true
				},
				data: action.payload
			};
		},
		closeUserProfileDialog: (state, action) => {
			state.userProfileDialog = {
				type: 'edit',
				props: {
					open: false
				},
				data: null
			};
		}
	},
	extraReducers: {
		[getUsers.fulfilled]: productsAdapter.setAll
	}
});

export const {
	setProductsSearchText,
	openUserDialog,
	closeUserDialog,
	openUserProfileDialog,
	closeUserProfileDialog
} = productsSlice.actions;

export default productsSlice.reducer;
