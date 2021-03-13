import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { realDb } from '../../../../../@fake-db/db/firebase';

var belongTo = localStorage.getItem('@BELONGTO')

export const getEntries = createAsyncThunk(
	'agencyApp/entries/getEntries',
	() =>
		new Promise((resolve, reject) => {
			var starCountRef = realDb.ref(`Sales/${belongTo}/`);
			var entries = [];
			starCountRef.on('value', snapshot => {
				const data = snapshot.val();

				if (data) {
					Object.keys(data).map(item => {
						entries.push(data[item]);
					});
				}

				if(data) {
					resolve([data])
				} else {
					resolve([]);
				}
			});
		})
);

const entriesAdapter = createEntityAdapter({});

export const { selectAll: selectEntries, selectById: selectEntryById } = entriesAdapter.getSelectors(
	state => state.agencyApp.entries
);

const entriesSlice = createSlice({
	name: 'agencyApp/entries',
	initialState: entriesAdapter.getInitialState({
	}),
	reducers: {},
	extraReducers: {
		[getEntries.fulfilled]: entriesAdapter.setAll
	}
});

export const {} = entriesSlice.actions;

export default entriesSlice.reducer;