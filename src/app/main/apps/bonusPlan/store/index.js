import { combineReducers } from '@reduxjs/toolkit';
import autoBonus from './bonusPlanSlice';
import user from './userSlice';

const reducer = combineReducers({
	autoBonus,
	user
});

export default reducer;
