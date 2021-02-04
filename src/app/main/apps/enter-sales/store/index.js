import { combineReducers } from '@reduxjs/toolkit';
import order from './orderSlice';
import orders from './ordersSlice';
import product from './productSlice';
import products from './entrySlice';
import fireEntries from './fireSlice';
import lifeEntries from './lifeSlice';
import healthEntries from './healthSlice';
import productType from './productTypeSlice';
import users from './userSlice';

const reducer = combineReducers({
	products,
	product,
	orders,
	order,
	fireEntries,
	lifeEntries,
	healthEntries,
	productType,
	users
});

export default reducer;
