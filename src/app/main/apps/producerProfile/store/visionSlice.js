import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { realDb } from '../../../../../@fake-db/db/firebase';

var belongTo = localStorage.getItem('@BELONGTO')
var UID = localStorage.getItem('@UID')

export const getVision = createAsyncThunk(
	'producrProfile/vision/getVision', 
	() =>
		new Promise((resolve, reject) => {
			var starCountRef = realDb.ref(`Vision/${belongTo}/`);
			var vision = [];
			starCountRef.on('value', snapshot => {
				const data = snapshot.val();

				if (data) {
					Object.keys(data).map(item => {
						vision.push(data[item]);
					});
				} 

				if (data) {
					resolve([data]);
				} else {
					resolve({});
				}
				
			});
		})
);

const visionAdapter = createEntityAdapter({});

export const { selectAll: selectVision, selectById: selectVisionById } = visionAdapter.getSelectors(
	state => state.producrProfile.vision
);

const visionSlice = createSlice({
	name: 'producrProfile/vision',
	initialState: visionAdapter.getInitialState({}),
	reducers: {},
	extraReducers: {
		[getVision.fulfilled]: visionAdapter.setAll
	}
});

export const { } = visionSlice.actions;

export default visionSlice.reducer;
