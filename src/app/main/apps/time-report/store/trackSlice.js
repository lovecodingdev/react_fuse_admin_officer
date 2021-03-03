import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { realDb } from '../../../../../@fake-db/db/firebase';

var belongTo = localStorage.getItem('@BELONGTO')
var UID = localStorage.getItem('@UID')

export const getTracks = createAsyncThunk(
	'timeReportApp/track/getTracks', 
	() =>
		new Promise((resolve, reject) => {
			var starCountRef = realDb.ref(`TimeReport/${belongTo}/${UID}/`);
			var vision = [];
			starCountRef.on('value', snapshot => {
				const data = snapshot.val();

				if (data) {
					Object.keys(data).map(item => {
						vision.push(data[item]);
					});
				} 
				resolve(vision);
			});
		})
);

export const saveTrack = createAsyncThunk('timeReportApp/track/saveTrack', async (vision, { dispatch, getState }) => {
	const response = await axios.post('/api/time-report-app/track/save', vision); 
	const data = await response.data;

	dispatch(getTracks());
	return data;
});

const trackAdapter = createEntityAdapter({});

export const { selectAll: selectTracks, selectById: selectTrackById } = trackAdapter.getSelectors(
	state => state.timeReportApp.tracks
);

const tractSlice = createSlice({
	name: 'timeReportApp/tracks',
	initialState: trackAdapter.getInitialState({ 
		cell: {},
	}),
	reducers: {	
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
		[getTracks.fulfilled]: trackAdapter.setAll
	}
});

export const { setCell } = tractSlice.actions;

export default tractSlice.reducer;
