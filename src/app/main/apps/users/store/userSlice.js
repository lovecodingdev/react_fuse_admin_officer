import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { realDb } from '../../../../../@fake-db/db/firebase';

export const getUsers = createAsyncThunk(
	'users/users/getUsers',
	() =>
		new Promise((resolve, reject) => {
			var starCountRef = realDb.ref(`users/`);
			var users = [];
			starCountRef.on('value', snapshot => {
				const data = snapshot.val();

				if (data) {
					Object.keys(data).map(item => {
						users.push(data[item]);
					});
					
				}
				console.log(users)
				resolve(users);
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

const productsAdapter = createEntityAdapter({});

export const { selectAll: selectUsers, selectById: selectUserById } = productsAdapter.getSelectors(
	state => state.users.users
);

const productsSlice = createSlice({
	name: 'users/users',
	initialState: productsAdapter.getInitialState({
		searchText: ''
	}),
	reducers: {
		setProductsSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		}
	},
	extraReducers: {
		[getUsers.fulfilled]: productsAdapter.setAll
	}
});

export const { setProductsSearchText } = productsSlice.actions;

export default productsSlice.reducer;
