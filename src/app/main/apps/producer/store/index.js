import { combineReducers } from '@reduxjs/toolkit';
import widgets from './widgetsSlice';
import users from './usersSlice';
import bonusPlans from './bonusPlansSlice';
import marketings from './marketingsSlice';
import entries from './entriesSlice';
import products from './productsSlice';

const reducer = combineReducers({
	widgets,
	users,
	bonusPlans,
	marketings,
	entries,
	products
});

export default reducer;
