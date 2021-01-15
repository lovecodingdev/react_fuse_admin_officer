import React from 'react';
import { Redirect } from 'react-router-dom';

const ContactsAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/bonus-plan/:id',
			component: React.lazy(() => import('./BonusPlanApp'))
		},
		{
			path: '/apps/bonus-plan',
			component: () => <Redirect to="/apps/bonus-plan/all" />
		}
	]
};

export default ContactsAppConfig;
