import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { realDb } from '../../../../../@fake-db/db/firebase';

export const getAverages = createAsyncThunk(
	'visionApp/averages/getAverages', 
	() =>
		new Promise((resolve, reject) => {
			var starCountRef = realDb.ref(`Vision/Averages/`);
			var averages = [];
			starCountRef.on('value', snapshot => {
				const data = snapshot.val();

				if (data) {
					Object.keys(data).map(item => {
						averages.push(data[item]);
					});
				}

				resolve(averages);
			});
		})
);

// export const getAverages = createAsyncThunk('visionApp/averages/getAverages', async () => {
// 	const response = await axios.get('/api/vision-app/averages');
// 	const data = await response.data;

// 	return data;
// });

export const saveAverages = createAsyncThunk('visionApp/averages/saveAverages', async (averages, { dispatch, getState }) => {
	const response = await axios.post('/api/vision-app/averages/save', averages);
	const data = await response.data;
	// dispatch(getAverages());
	return data;
});

const averagesAdapter = createEntityAdapter({});
export const { selectAll: selectAverages, selectById: selectAverageById } = averagesAdapter.getSelectors(
	state => state.visionApp.averages
);

const averagesSlice = createSlice({
	name: 'visionApp/averages',
	initialState: averagesAdapter.getInitialState({ 
		_average: {},
		_averages: [],
	}),
	reducers: {
		setAverages: {
			reducer: (state, action) => { 	
				state._averages = [...action.payload.val];													
			},
			prepare: val => ({ payload: val || [] })
		},
		setAverage: {
			reducer: (state, action) => {
				const row = action.payload.row;
				const col = action.payload.col;
				const value = action.payload.value;
				state._average = { row: row, col: col, value: value };
			},
			prepare: val => ({ payload: val || '' })
		},
	},
	extraReducers: {
		[getAverages.fulfilled]: averagesAdapter.setAll
	}
});

export const { setAverage, setAverages } = averagesSlice.actions;

export default averagesSlice.reducer;
