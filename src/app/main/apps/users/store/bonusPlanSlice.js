import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {realDb} from '../../../../../@fake-db/db/firebase'

export const getTemplateData = createAsyncThunk('users/templates/getTemplateData', (uid, { getState }) =>
	
new Promise((resolve, reject) => {
	var belongTo = localStorage.getItem('@BELONGTO')
    var uid = localStorage.getItem('@UID')
	var starCountRef = realDb.ref(`BonusPlanTemplate/${belongTo}/`);
    var bonusRef = realDb.ref(`BonusPlan/${belongTo}/`);

	var bonusPlans = [];
	starCountRef.once('value', snapshot => {
		const data = snapshot.val();
		console.log(`users/${uid}/`)
		if (data) {
			bonusPlans.push(data)
			resolve(bonusPlans)
		} else {
			resolve(bonusPlans)
		}	
		
	});
}));

const userSlice = createSlice({
	name: 'users/templates',
	initialState: {},
	reducers: {},
	extraReducers: {
		[getTemplateData.fulfilled]: (state, action) => action.payload
	}
});

export default userSlice.reducer;
