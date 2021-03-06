import { combineReducers } from '@reduxjs/toolkit';
import widgets from './widgetsSlice';
import users from './usersSlice';
import bonusPlans from './bonusPlansSlice';
import marketings from './marketingsSlice';
import entries from './entriesSlice';
import products from './productsSlice';
import vision from './visionSlice';

const reducer = combineReducers({
	widgets,
	users,
	bonusPlans,
	marketings,
	entries,
	products,
	vision,
});

export default reducer;
