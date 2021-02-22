import { combineReducers } from '@reduxjs/toolkit';
import widgets from './widgetsSlice';
import products from './productsSlice';
import users from './usersSlice';

const reducer = combineReducers({
	products,
	widgets,
	users,
});

export default reducer;
