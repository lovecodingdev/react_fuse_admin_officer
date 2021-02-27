import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { realDb } from '../../../../../@fake-db/db/firebase';

var belongTo = localStorage.getItem('@BELONGTO')

export const getEntries = createAsyncThunk(
	'eCommerceApp/products/getProducts',
	() =>
		new Promise((resolve, reject) => {
			var starCountRef = realDb.ref(`Sales/${belongTo}/`);
			// var uid = localStorage.getItem('@UID');
			var entries = [];
			starCountRef.on('value', snapshot => {
				const data = snapshot.val();

				if (data) {
					Object.keys(data).map(item => {
						// if (uid) {
							Object.keys(data[item]).map(uid=>{
								if (data[item][uid]) {
									Object.keys(data[item][uid]).map(i => {
										entries.push({...data[item][uid][i], policyType:[item]});
									});
								}
							})
							
						// }
					});
				}

				resolve(entries);
			});
		})
);



export const saveProduct = createAsyncThunk('eCommerceApp/product/saveProduct', async (product, { dispatch, getState }) => {

	const response = await axios.post('/api/e-commerce-app/product/save', product);
	const data = await response.data;
	dispatch(getEntries());
	return data;
});

export const updateProduct = createAsyncThunk('eCommerceApp/product/saveProduct', async (product, { dispatch, getState }) => {

	const response = await axios.post('/api/e-commerce-app/product/update', product);
	const data = await response.data;
	dispatch(getEntries());
	return data;
});

export const removeProducts = createAsyncThunk(
	'eCommerceApp/products/removeProducts',
	async (productIds, { dispatch, getState }) => {
		const response = await axios.post('/api/e-commerce-app/remove-products', { productIds });
		const data = await response.data;
		const uid = localStorage.getItem('@UID');
		productIds.map(item => {
			var starCountRef = realDb.ref(`Sales/${belongTo}/Entries/${uid}/${item}`);
			var starAutoRef = realDb.ref(`Sales/${belongTo}/LifeEntries/${uid}/${item}`);
			var starFireRef = realDb.ref(`Sales/${belongTo}/FireEntries/${uid}/${item}`);
			var starHealthRef = realDb.ref(`Sales/${belongTo}/HealthEntries/${uid}/${item}`);
			starCountRef.remove();
			starAutoRef.remove();
			starFireRef.remove();
			starHealthRef.remove();
		});

		dispatch(getEntries());

		return data;
	}
);

const productsAdapter = createEntityAdapter({});

export const { selectAll: selectEntries, selectById: selectProductById } = productsAdapter.getSelectors(
	state => state.eCommerceApp.products
);

const productsSlice = createSlice({
	name: 'eCommerceApp/products',
	initialState: productsAdapter.getInitialState({
		searchText: '',
		editData:{}
	}),
	reducers: {
		setProductsSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		},
		setEditData: (state, action) => {
			state.editData = {
				...action.payload
			};
		},
	},
	extraReducers: {
		[getEntries.fulfilled]: productsAdapter.setAll,

	}
});

export const { setProductsSearchText, setEditData } = productsSlice.actions;

export default productsSlice.reducer;
