import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { realDb } from '../../../../../@fake-db/db/firebase';
import axios from 'axios';

var belongTo = localStorage.getItem('@BELONGTO')

export const getProjects = createAsyncThunk('policyGrowthReport/projects/getProjects', async () => new Promise((resolve, reject) => {
	var starCountRef = realDb.ref(`PolicyGrothReport/${belongTo}/`);
	var entries = [];
	starCountRef.on('value', snapshot => {
		const data = snapshot.val();

		// if (data) {
		// 	Object.keys(data).map(item => {
		// 		entries.push(data[item]);
		// 	});
		// }
		entries.push(data)

		resolve(entries);
	});
}));

export const saveProduct = createAsyncThunk('policyGrowthReport/projects/saveProduct', async (product, { dispatch, getState }) => {

	console.log(product)
	realDb.ref(`PolicyGrothReport/${belongTo}/`).set({...product})
	dispatch(getProjects());
	return product;
});

const projectsAdapter = createEntityAdapter({});

export const {
	selectAll: selectProjects,
	selectEntities: selectProjectsEntities,
	selectById: selectProjectById
} = projectsAdapter.getSelectors(state => state.policyGrowthReport.projects);

const projectsSlice = createSlice({
	name: 'policyGrowthReport/projects',
	initialState: projectsAdapter.getInitialState(),
	reducers: {},
	extraReducers: {
		[getProjects.fulfilled]: projectsAdapter.setAll
	}
});

export default projectsSlice.reducer;
