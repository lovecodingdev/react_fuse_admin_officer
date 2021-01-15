import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { realDb } from '../../../../../../@fake-db/db/firebase';

export const getFires = createAsyncThunk(
	'income/fireEntries/getProducts',
	() =>
		new Promise((resolve, reject) => {
			var starCountRef = realDb.ref(`EnterSales/FireEntries/`);
			var entries = [];
			starCountRef.on('value', snapshot => {
				const data = snapshot.val();

				if (data) {
					Object.keys(data).map(item => {
						entries.push(data[item]);
					});
				}

				resolve(entries);
			});
		})
);

export const saveProduct = createAsyncThunk('income/fireEntry/saveProduct', async (product, { dispatch, getState }) => {

	const response = await axios.post('/api/fire-entry/product/save', product);
	const data = await response.data;
	dispatch(getFires());
	return data;
});

export const removeProducts = createAsyncThunk(
	'income/fireEntries/removeProducts',
	async (productIds, { dispatch, getState }) => {
		const response = await axios.post('/api/fire-entry/remove-products', { productIds });
		const data = await response.data;
		productIds.map(item => {
			var starCountRef = realDb.ref(`EnterSales/FireEntries/${item}`);
			starCountRef.remove();
		});

		dispatch(getFires());

		return data;
	}
);

const productsAdapter = createEntityAdapter({});

export const { selectAll: selectFires, selectById: selectProductById } = productsAdapter.getSelectors(
	state => state.income.fireEntries
);

const productsSlice = createSlice({
	name: 'income/fireEntries',
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
		[getFires.fulfilled]: productsAdapter.setAll
	}
});

export const { setProductsSearchText } = productsSlice.actions;

export default productsSlice.reducer;
