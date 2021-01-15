import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('productionApp/products/getProducts', async () => {
	const response = await axios.get('/api/production-app/products');
	const data = await response.data;

	return data;
});

const productsAdapter = createEntityAdapter({});

export const { selectAll: selectProducts, selectById: selectProductById } = productsAdapter.getSelectors(
	state => state.productionApp.products
);

const productsSlice = createSlice({
	name: 'productionApp/products',
	initialState: productsAdapter.getInitialState({
		production: '',
		period: '',
	}),
	reducers: {
		setProduction: {
			reducer: (state, action) => {
				state.production = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		},
		setPeriod: {
			reducer: (state, action) => {
				state.period = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		}
	},
	extraReducers: {
		[getProducts.fulfilled]: productsAdapter.setAll
	}
});

export const { setProduction, setPeriod } = productsSlice.actions;

export default productsSlice.reducer;
