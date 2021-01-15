import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import axios from 'axios';
import { realDb } from '../../../../../@fake-db/db/firebase';

export const getGoals = createAsyncThunk(
	'visionApp/goals/getGoals', 
	() =>
		new Promise((resolve, reject) => {
			var starCountRef = realDb.ref(`Vision/Goals/`);
			var goals = [];
			starCountRef.on('value', snapshot => {
				const data = snapshot.val();

				if (data) {
					Object.keys(data).map(item => {
						goals.push(data[item]);
					});
				}
				
				resolve(goals);
			});
		})
);

// export const getGoals = createAsyncThunk('visionApp/goals/getGoals', async () => {
// 	const response = await axios.get('/api/vision-app/goals');
// 	const data = await response.data;

// 	return data;
// });

export const saveGoals = createAsyncThunk('visionApp/goals/saveGoals', async (goals, { dispatch, getState }) => {
	const response = await axios.post('/api/vision-app/goals/save', goals);
	const data = await response.data;
	// dispatch(getGoals());
	return data;
});

const goalsAdapter = createEntityAdapter({});

export const { selectAll: selectGoals, selectById: selectGoalsById } = goalsAdapter.getSelectors(
	state => state.visionApp.goals
);

const goalsSlice = createSlice({
	name: 'visionApp/goals',
	initialState: goalsAdapter.getInitialState({ 
		searchText: '',		
		_goals: [],	
	}),
	reducers: {
		setGoalsSearchText: {
			reducer: (state, action) => {
				state.searchText = action.payload;
			},
			prepare: event => ({ payload: event.target.value || '' })
		},
		setGoals: {
			reducer: (state, action) => { 	
				state._goals = [...action.payload.val];		
			},
			prepare: val => ({ payload: val || [] })
		},		
	},
	extraReducers: {
		[getGoals.fulfilled]: goalsAdapter.setAll
	}
});

export const { setGoalsSearchText, setGoals } = goalsSlice.actions;

export default goalsSlice.reducer;
