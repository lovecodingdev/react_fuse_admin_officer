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
		production: '',
		period: '',
		user: '',
		report: '',
		cell: {},
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
		setCell: {
			reducer: (state, action) => {
				const tableName = action.payload.tableName;
				const row = action.payload.row;
				const col = action.payload.col;
				const rowKey = action.payload.rowKey;
				const colKey = action.payload.colKey;
				const value = action.payload.value;
				state.cell = { tableName: tableName, row: row, col: col, rowKey: rowKey, colKey: colKey, value: value };
			},
			prepare: val => ({ payload: val || '' })
		},
	},
	extraReducers: {
		[getProducts.fulfilled]: productsAdapter.setAll
	}
});

export const { setProduction, setPeriod, setUser, setReport, setCell } = productsSlice.actions;

export default productsSlice.reducer;
