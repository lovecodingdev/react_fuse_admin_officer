import React from 'react';
import { Redirect } from 'react-router-dom';

const TimeReportAppConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/apps/time-report',
			component: React.lazy(() => import('./TimeReport'))
		},
		{
			path: '/apps/time-track',
			component: React.lazy(() => import('./TimeTrack'))
		},
	]
};

export default TimeReportAppConfig;
