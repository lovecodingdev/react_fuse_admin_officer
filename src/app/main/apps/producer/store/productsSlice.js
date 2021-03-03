import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProducts = createAsyncThunk('producerApp/products/getProducts', async () => {
	const response = await axios.get('/api/producer-app/products');
	const data = await response.data;

	return data;
});

const productsAdapter = createEntityAdapter({});

export const { selectAll: selectProducts, selectById: selectProductById } = productsAdapter.getSelectors(
	state => state.producerApp.products
);

const productsSlice = createSlice({
	name: 'producerApp/products',
	initialState: productsAdapter.getInitialState({
		producer: '',
		period: '',
	}),
	reducers: {
		setProduction: {
			reducer: (state, action) => {
				state.producer = action.payload;
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
				state.period = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		}
	},
	extraReducers: {
		[getProducts.fulfilled]: productsAdapter.setAll
	}
});

export const { setProduction, setPeriod, setUser } = productsSlice.actions;

export default productsSlice.reducer;
