import { combineReducers } from '@reduxjs/toolkit';
import autoBonus from './bonusPlanSlice';
import user from './userSlice';
import typeProduct from './productTypeSlice'

const reducer = combineReducers({
	autoBonus,
	user,
	typeProduct
});

export default reducer;
