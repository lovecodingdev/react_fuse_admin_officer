import React from 'react';
import { Redirect } from 'react-router-dom';

const ProjectDashboardAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/production/sales-results',
			component: React.lazy(() => import('./salesResults/SalesResults'))
		},
		{
			path: '/apps/production/product-line',
			component: React.lazy(() => import('./productLine/ProductLine'))
		},
		{
			path: '/apps/production/multiline',
			component: React.lazy(() => import('./multiline/Multiline'))
		},
		{
			path: '/apps/production',
			component: () => <Redirect to="/apps/production/sales-results" />
		}
	]
};

export default ProjectDashboardAppConfig;
