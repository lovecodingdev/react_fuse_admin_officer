import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {realDb} from '../../../../../@fake-db/db/firebase'

export const getUserData = createAsyncThunk('bonusPlan/user/getUserData', (uid, { getState }) =>
	
new Promise((resolve, reject) => {

	var starCountRef = realDb.ref(`users/${uid}/`);
	var bonusPlans = [];
	starCountRef.on('value', snapshot => {
		const data = snapshot.val();
		console.log(`users/${uid}/`)
		if (data) {
			Object.keys(data).map(item => {
				bonusPlans.push(data[item]);
			});
		}

		if(data){
			resolve([data])
		} else {
			resolve([]);
		}
		
	});
}));

const userSlice = createSlice({
	name: 'bonusPlan/user',
	initialState: {},
	reducers: {},
	extraReducers: {
		[getUserData.fulfilled]: (state, action) => action.payload
	}
});

export default userSlice.reducer;
