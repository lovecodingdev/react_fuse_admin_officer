import { createEntityAdapter, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

var belongTo = localStorage.getItem('@BELONGTO')

export const getProjects = createAsyncThunk('policyGrowthReport/projects/getProjects', async () => {
	const response = await axios.get('/api/lapse-rate/projects');
	return response.data;
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
