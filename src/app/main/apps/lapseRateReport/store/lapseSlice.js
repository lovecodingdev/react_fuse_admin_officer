import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { realDb } from '../../../../../@fake-db/db/firebase';



export const getProjects = createAsyncThunk('lapseRate/projects/getProjects', 
// async () => {
// 	const response = await axios.get('/api/lapse-rate/projects');
// 	return response.data;
// }
() =>
		new Promise((resolve, reject) => {
			var belongTo = localStorage.getItem('@BELONGTO')
			var uid = localStorage.getItem('@UID')
			var starCountRef = realDb.ref(`LapseRateReport/${belongTo}/${uid}/`);
			var entries = [];
			starCountRef.on('value', snapshot => {
				const data = snapshot.val();

				if (data) {
					// Object.keys(data).map(item => {
					// 	entries.push(data);
					// });
					entries.push(data)
				}

				resolve(entries);
			});
		})
);

export const saveLapseRate = createAsyncThunk('lapseRate/projects/saveLapseBonus',async (data)=> {
	var belongTo = localStorage.getItem('@BELONGTO')
	var uid = localStorage.getItem('@UID')
	const response = await axios.get('/api/lapse-rate/projects');
	
	realDb.ref(`LapseRateReport/${belongTo}/${uid}/Auto/`).set({...data, id:"auto"})
	return response.data;
});
export const saveFireLapseRate = createAsyncThunk('lapseRate/projects/saveLapseBonus',async (data)=> {
	var belongTo = localStorage.getItem('@BELONGTO')
	var uid = localStorage.getItem('@UID')
	const response = await axios.get('/api/lapse-rate/projects');
	
	realDb.ref(`LapseRateReport/${belongTo}/${uid}/Fire/`).set({...data, id:"fire"})
	return response.data;
});

const projectsAdapter = createEntityAdapter({});

export const {
	selectAll: selectProjects,
	selectEntities: selectProjectsEntities,
	selectById: selectProjectById
} = projectsAdapter.getSelectors(state => state.lapseRate.projects);

const projectsSlice = createSlice({
	name: 'lapseRate/projects',
	initialState: projectsAdapter.getInitialState(),
	reducers: {},
	extraReducers: {
		[getProjects.fulfilled]: projectsAdapter.setAll
	}
});

export default projectsSlice.reducer;
