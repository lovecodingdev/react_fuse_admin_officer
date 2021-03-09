import { combineReducers } from '@reduxjs/toolkit';
import widgets from './widgetsSlice';
import products from './productsSlice';
import bonusPlans from './bonusPlansSlice';
import entries from './entriesSlice';
import marketings from './marketingsSlice';
import users from './usersSlice';
import vision from './visionSlice';

const reducer = combineReducers({
	products,
	widgets,
	users,
	bonusPlans,
	entries,
	marketings,
	vision,
});

export default reducer;
