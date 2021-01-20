import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('agencyApp/products/getProducts', async () => {
	const response = await axios.get('/api/agency-app/products');
	const data = await response.data;

	return data;
});

const productsAdapter = createEntityAdapter({});

export const { selectAll: selectProducts, selectById: selectProductById } = productsAdapter.getSelectors(
	state => state.agencyApp.products
);

const productsSlice = createSlice({
	name: 'agencyApp/products',
	initialState: productsAdapter.getInitialState({
		production: '',
		period: '',
		user: '',
		report: '',
		product: '',
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
		},
		setUser: {
			reducer: (state, action) => {
				state.user = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		},
		setReport: {
			reducer: (state, action) => {
				state.user = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		},
		setProduct: {
			reducer: (state, action) => {
				state.user = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		}
	},
	extraReducers: {
		[getProducts.fulfilled]: productsAdapter.setAll
	}
});

export const { setProduction, setPeriod, setUser, setReport, setProduct } = productsSlice.actions;

export default productsSlice.reducer;
