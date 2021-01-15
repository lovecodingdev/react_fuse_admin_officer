import React from 'react';


const ProjectDashboardAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/income/payroll',
			component: React.lazy(() => import('./IncomePayroll'))
		}
	]
};

export default ProjectDashboardAppConfig;
