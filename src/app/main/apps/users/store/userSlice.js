import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { realDb } from '../../../../../@fake-db/db/firebase';

export const getUsers = createAsyncThunk(
	'users/users/getUsers',
	() =>
		new Promise((resolve, reject) => {
			
			var starCountRef = realDb.ref(`users/`);
			var agencyCountRef = realDb.ref(`agency/`);
			var users = [];
			starCountRef.on('value', snapshot => {
				const data = snapshot.val();
				
				if (data) {
					Object.keys(data).map(item => {
						users.push(data[item]);
					});					
				}
				
				agencyCountRef.on('value', snap=>{
					const agencyData = snap.val();
					if (agencyData) {
						Object.keys(agencyData).map(item => {
							users.push(agencyData[item]);
						});					
					}
					resolve(users);
				})
				
			});
		})
);

export const saveProduct = createAsyncThunk('users/users/saveUser', async (product, { dispatch, getState }) => {

	const response = await axios.post('/api/users/save', product);
	const data = await response.data;
	dispatch(getUsers());
	return data;
});

export const removeProducts = createAsyncThunk(
	'users/users/removeUser',
	async (productIds, { dispatch, getState }) => {
		const response = await axios.post('/api/users/remove-users', { productIds });
		const data = await response.data;
		const uid = localStorage.getItem('@UID')
		productIds.map(item => {
			var starCountRef = realDb.ref(`Users/`);
			starCountRef.remove();
		});

		dispatch(getUsers());

		return data;
	}
);

export const addUser = createAsyncThunk(
	'users/user/addUser',
	async (contact, { dispatch, getState }) => {
		
		const response = await axios.post('/api/users/add-users', { contact });
		const data = await response.data;
		
		dispatch(getUsers());

		return data;
	}
);

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
		},
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
		},
	},
	extraReducers: {
		[getUsers.fulfilled]: productsAdapter.setAll,
		[addUser.fulfilled]: productsAdapter.addOne,
	}
});

export const { setProductsSearchText, openUserDialog, closeUserDialog, openUserProfileDialog, closeUserProfileDialog } = productsSlice.actions;

export default productsSlice.reducer;
