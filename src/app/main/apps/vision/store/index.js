import { combineReducers } from '@reduxjs/toolkit';
import goals from './productsSlice';
import averages from './averagesSlice';
import widgets from './widgetsSlice';

const reducer = combineReducers({
	goals,
	averages,
	widgets,
});

export default reducer;
