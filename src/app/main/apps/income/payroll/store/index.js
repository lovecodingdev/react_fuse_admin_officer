import { combineReducers } from '@reduxjs/toolkit';
import projects from './projectsSlice';
import widgets from './widgetsSlice';
import entries from './entrySlice';
import fireEntries from './fireSlice';
import lifeEntries from './lifeSlice';
import healthEntries from './healthSlice';

const reducer = combineReducers({
	widgets,
	projects,
	entries,
	fireEntries,
	lifeEntries,
	healthEntries
});

export default reducer;
