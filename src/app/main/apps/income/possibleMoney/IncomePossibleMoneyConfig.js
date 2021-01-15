import React from 'react';
import { Redirect } from 'react-router-dom';

const AnalyticsDashboardAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/income/possible-money',
			component: React.lazy(() => import('./IncomePossibleMoney'))
		},
		{
			path: '/apps/income',
			component: () => <Redirect to="/apps/income/payroll" />
		}
	]
};

export default AnalyticsDashboardAppConfig;
