import { combineReducers } from '@reduxjs/toolkit';
import widgets from './widgetsSlice';
import products from './productsSlice';

const reducer = combineReducers({
	products,
	widgets,
});

export default reducer;
